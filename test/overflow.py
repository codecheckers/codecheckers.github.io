#!/usr/bin/env python3
"""Report pages of _site/ that scroll sideways at a given viewport width.

    test/overflow.py [--width 393] [PATH ...]

A page whose document is wider than the viewport drags the navigation and
footer out with it and cuts off content with no visible way to reach it.
Usual culprits are images with a fixed width and wide tables or code blocks;
anything that cannot fit must scale down or scroll inside its own container.

Run `make build` first - this reads what is in _site/. Serves it locally, injects a measuring script into each HTML response and
reads the numbers back out of headless Chrome's --dump-dom. Exits non-zero if
any page overflows.
"""

import argparse
import functools
import http.server
import re
import subprocess
import shutil
import sys
import threading

# Reports the page width and, when it overflows, the widest elements sticking
# out past the viewport - the culprit is usually one image or table.
PROBE = """<script>
(function () {
  var doc = document.documentElement;
  var limit = doc.clientWidth;
  var blame = [];
  if (doc.scrollWidth > limit) {
    Array.prototype.forEach.call(document.querySelectorAll("body *"), function (el) {
      var right = el.getBoundingClientRect().right;
      if (right > limit + 1) {
        var name = el.tagName.toLowerCase() +
          (el.id ? "#" + el.id : "") +
          (typeof el.className === "string" && el.className
            ? "." + el.className.trim().split(/\s+/).join(".")
            : "");
        blame.push(Math.round(right) + "px " + name.slice(0, 60));
      }
    });
    blame = blame.slice(0, 5);
  }
  document.title = "PROBE:" + doc.scrollWidth + ":" + limit + ":" + blame.join(" | ");
})();
</script>"""

DEFAULT_PATHS = [
    "/",
    "/project/",
    "/process/",
    "/workflows/",
    "/partners/",
    "/get-involved/",
    "/faq/",
    "/benefits/",
    "/institutions/",
    "/guide/community-workflow-overview.html",
    "/nl/",
    "/404.html",
]


class Handler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):  # inject the probe into HTML responses
        import os

        path = self.translate_path(self.path)
        if os.path.isdir(path):
            path = os.path.join(path, "index.html")
        if not path.endswith(".html"):
            return super().send_head()
        try:
            body = open(path, "rb").read() + PROBE.encode()
        except OSError:
            return super().send_head()
        self.send_response(200)
        self.send_header("Content-Type", "text/html")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        import io

        return io.BytesIO(body)

    def log_message(self, *args):
        pass


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--width", type=int, default=393, help="viewport width in CSS px")
    ap.add_argument("paths", nargs="*", default=DEFAULT_PATHS)
    args = ap.parse_args()

    chrome = next(
        (c for c in ("google-chrome", "chromium", "chromium-browser") if shutil.which(c)),
        None,
    )
    if not chrome:
        sys.exit("no chrome/chromium found")

    server = http.server.ThreadingHTTPServer(
        ("127.0.0.1", 0),
        functools.partial(Handler, directory="_site"),
    )
    threading.Thread(target=server.serve_forever, daemon=True).start()
    port = server.server_address[1]

    failed = False
    for path in args.paths:
        dom = subprocess.run(
            [
                chrome, "--headless", "--disable-gpu", "--no-sandbox",
                f"--window-size={args.width},851", "--virtual-time-budget=8000",
                "--dump-dom", f"http://127.0.0.1:{port}{path}",
            ],
            capture_output=True, text=True,
        ).stdout
        match = re.search(r"PROBE:(\d+):(\d+):([^<]*)", dom)
        if not match:
            print(f"?? {path}: could not measure")
            failed = True
            continue
        scroll, client = int(match.group(1)), int(match.group(2))
        blame = match.group(3).strip()
        # Chrome's --dump-dom ignores --window-size, so compare the numbers the
        # page itself reports rather than the requested width.
        ok = scroll <= client
        failed = failed or not ok
        print(f"{'ok' if ok else 'OVERFLOW'} {path}: document {scroll}px in {client}px viewport")
        if blame:
            print(f"   widest elements past the edge: {blame}")

    server.shutdown()
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
