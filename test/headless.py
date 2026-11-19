"""Shared helpers for the tests that load the built site in headless Chrome
(test/overflow.py, test/email_templates.py): serve _site/ with a script
injected into its HTML pages, and read back what the script reports in
document.title through Chrome's --dump-dom.
"""

import concurrent.futures
import contextlib
import functools
import html
import http.server
import io
import os
import re
import shutil
import subprocess
import sys
import threading

SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "_site")
# served at /__fixtures__/, see serve_site(rewrite=...)
FIXTURES = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fixtures")


def find_chrome():
    chrome = next((c for c in ("google-chrome", "chromium", "chromium-browser") if shutil.which(c)), None)
    if not chrome:
        sys.exit("no chrome/chromium found")
    if not os.path.isdir(SITE):
        sys.exit("no _site/, run `make build` first")
    return chrome


@contextlib.contextmanager
def serve_site(script, only=None, rewrite=()):
    """Serve _site/ on a free local port, with `script` (bytes) appended to
    every HTML page, or only to the paths in `only`, and each (old, new) pair
    of bytes in `rewrite` replaced in those pages - e.g. to point a request at
    a file in test/fixtures/, which is served at /__fixtures__/. Yields the
    base URL."""

    class Handler(http.server.SimpleHTTPRequestHandler):
        def translate_path(self, path):
            if path.startswith("/__fixtures__/"):
                return os.path.join(FIXTURES, path[len("/__fixtures__/"):].split("?", 1)[0])
            return super().translate_path(path)

        def send_head(self):
            path = self.translate_path(self.path)
            if os.path.isdir(path):
                path = os.path.join(path, "index.html")
            url_path = self.path.split("?", 1)[0]
            if not path.endswith(".html") or (only is not None and url_path not in only):
                return super().send_head()
            try:
                with open(path, "rb") as f:
                    body = f.read()
                for old, new in rewrite:
                    body = body.replace(old, new)
                body += script  # browsers run a script after </body>, too
            except OSError:
                return super().send_head()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            return io.BytesIO(body)

        def log_message(self, *args):
            pass

    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Handler, directory=SITE))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        yield f"http://127.0.0.1:{server.server_address[1]}"
    finally:
        server.shutdown()


def page_title(chrome, url, prefix, flags=(), timeout=120):
    """The text after `prefix` in the page's <title> once loaded, or None."""
    try:
        dom = subprocess.run(
            [chrome, "--headless", "--disable-gpu", "--no-sandbox", *flags, "--dump-dom", url],
            capture_output=True, text=True, timeout=timeout,
        ).stdout
    except subprocess.TimeoutExpired:
        return None
    match = re.search(r"<title>" + re.escape(prefix) + r"(.*?)</title>", dom, re.S)
    return html.unescape(match.group(1)) if match else None


def map_parallel(fn, items):
    """fn(item) for every item, run in parallel, results in the order of items."""
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        return list(pool.map(fn, items))
