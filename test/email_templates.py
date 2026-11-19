#!/usr/bin/env python3
"""Test the email template pages of the built site in headless Chrome.

    test/email_templates.py

Run `make build` first - this reads what is in _site/. Injects
test/email-templates.test.js into the template pages, which checks that every
"Open in email software" link carries exactly the text shown, and tests
assets/email-templates.js - the issue parser and the placeholder form, lookup,
saving, restoring and reset - against fixtures: jQuery.ajax is replaced by a
stub, and a request without a fixture fails the test.

Exits non-zero if a test fails.
"""

import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from headless import find_chrome, map_parallel, page_title, serve_site  # noqa: E402

# ?restore loads the page with values saved by an "earlier visit"
URLS = [
    "/guide/templates/emails-to-authors.html",
    "/guide/templates/emails-to-authors.html?restore",
    "/guide/templates/letter-editor.html",
]

with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "email-templates.test.js"), "rb") as f:
    TEST_SCRIPT = b"<script>" + f.read() + b"</script>"


def main():
    chrome = find_chrome()
    pages = {url.split("?")[0] for url in URLS}
    with serve_site(TEST_SCRIPT, only=pages) as base:
        outputs = map_parallel(
            lambda url: page_title(chrome, base + url, "TESTS:", ["--virtual-time-budget=20000"]), URLS)

    failed = False
    for url, output in zip(URLS, outputs):
        results = json.loads(output) if output else [{"name": "tests did not finish", "ok": False}]
        bad = [r for r in results if not r["ok"]]
        for r in bad:
            print(f"FAIL {url}: {r['name']}" + (f" - {r['detail']}" if r.get("detail") else ""))
        if bad:
            failed = True
        print(f"{'FAIL' if bad else 'ok  '} {url}: {len(results) - len(bad)}/{len(results)} passed")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
