#!/usr/bin/env python3
"""Ask the Internet Archive's Wayback Machine to capture every page of the site.

    tools/archive.py [--dry-run] [--delay SECONDS] [--sitemap URL_OR_FILE]

The list of pages is the published sitemap (https://codecheck.org.uk/sitemap.xml,
written by jekyll-sitemap), so it holds exactly what is online: pages and PDFs,
without the redirect pages of jekyll-redirect-from. The register (/register/)
is a separate site and not included. --sitemap _site/sitemap.xml lists a local
build instead, e.g. to preview the list before publishing.

Uses "Save Page Now" (https://web.archive.org/save). With IA_ACCESS_KEY and
IA_SECRET_KEY set (S3-style keys from https://archive.org/account/s3.php) it
uses the authenticated API, which allows more captures; otherwise it sends
anonymous requests, which the Internet Archive rate-limits more strictly. Both
are paced by --delay and back off when the archive answers 429.
"""

import argparse
import json
import os
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

SITEMAP = "https://codecheck.org.uk/sitemap.xml"
SAVE = "https://web.archive.org/save"
USER_AGENT = "codecheck-website-archiver (+https://codecheck.org.uk)"
RETRIES = 3
BACKOFF = 60  # seconds to wait after a 429
NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def request(url, data=None, headers=None, read=False):
    """The final URL after redirects, and the body if `read`."""
    headers = {"User-Agent": USER_AGENT, **(headers or {})}
    req = urllib.request.Request(url, data=data, headers=headers)
    with urllib.request.urlopen(req, timeout=120) as resp:
        return resp.geturl(), resp.read() if read else None


def pages(sitemap):
    """The <loc> URLs of a sitemap, given as URL or local file."""
    if os.path.exists(sitemap):
        with open(sitemap, "rb") as f:
            xml = f.read()
    else:
        _, xml = request(sitemap, read=True)
    return [loc.text.strip() for loc in ET.fromstring(xml).findall("sm:url/sm:loc", NS)]


def save(url, keys):
    """Ask for a capture; returns the snapshot URL or the job ID."""
    if keys:
        data = urllib.parse.urlencode({"url": url}).encode()
        headers = {"Accept": "application/json", "Authorization": "LOW %s:%s" % keys}
        _, body = request(SAVE, data=data, headers=headers, read=True)
        answer = json.loads(body)
        if "job_id" not in answer:
            raise RuntimeError(answer.get("message") or answer)
        return "job " + answer["job_id"]
    # answers with a redirect to the new snapshot, /web/<timestamp>/<url>
    snapshot, _ = request("%s/%s" % (SAVE, url))
    return snapshot


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--sitemap", default=SITEMAP, help="sitemap URL or file (default: %(default)s)")
    parser.add_argument("--delay", type=float, default=10, help="seconds between captures (default: 10)")
    parser.add_argument("--dry-run", action="store_true", help="only list the pages")
    args = parser.parse_args()

    try:
        urls = pages(args.sitemap)
    except (OSError, ET.ParseError) as e:
        sys.exit("cannot read the sitemap %s: %s" % (args.sitemap, e))
    if args.dry_run:
        print("\n".join(urls))
        print("%d pages" % len(urls), file=sys.stderr)
        return

    access, secret = os.environ.get("IA_ACCESS_KEY"), os.environ.get("IA_SECRET_KEY")
    keys = (access, secret) if access and secret else None
    print("%d pages, %s requests" % (len(urls), "authenticated" if keys else "anonymous"))

    failed = []
    for i, url in enumerate(urls, 1):
        prefix = "[%d/%d] %s" % (i, len(urls), url)
        for attempt in range(1, RETRIES + 1):
            try:
                print(prefix, "-", save(url, keys))
                break
            # OSError covers URLError, HTTPError and timeouts while reading;
            # ValueError is an unreadable JSON answer
            except (OSError, RuntimeError, ValueError) as e:
                if getattr(e, "code", None) == 429 and attempt < RETRIES:
                    print(prefix, "- rate limited, waiting %ds" % BACKOFF)
                    time.sleep(BACKOFF)
                    continue
                print(prefix, "- failed:", e)
                failed.append(url)
                break
        if i < len(urls):
            time.sleep(args.delay)

    if failed:
        print("%d page(s) failed:" % len(failed), *failed, sep="\n  ")
        sys.exit(1)


if __name__ == "__main__":
    main()
