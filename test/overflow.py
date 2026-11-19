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
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from headless import SITE, find_chrome, map_parallel, page_title, serve_site  # noqa: E402

# Reports the page width and, when it overflows, the widest elements sticking
# out past the viewport - the culprit is usually one image or table.
PROBE = r"""<script>
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

# The home page shows live data from the register; the test uses a fixed copy
# in test/fixtures/register/ instead, so its result does not change with the
# register. To update it, download the four files again (persons/index.json
# only needs the right number of entries).
REGISTER_FIXTURES = [
    (b'url: "https://codecheck.org.uk/register/' + name, b'url: "/__fixtures__/register/' + name)
    for name in (b"featured.json", b"stats.json", b"persons/index.json", b"venues/index.json")
]

DEFAULT_PATHS = [
    "/",
    "/project/",
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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--width", type=int, default=393, help="viewport width in CSS px")
    ap.add_argument("paths", nargs="*", default=DEFAULT_PATHS)
    args = ap.parse_args()

    chrome = find_chrome()
    # without the rewrite the home page would quietly measure live data again
    if "/" in args.paths:
        with open(os.path.join(SITE, "index.html"), "rb") as f:
            home = f.read()
        lost = [old.decode() for old, _ in REGISTER_FIXTURES if old not in home]
        if lost:
            sys.exit("the home page no longer requests " + ", ".join(lost) +
                     " - update REGISTER_FIXTURES in test/overflow.py")
    flags = (f"--window-size={args.width},851", "--virtual-time-budget=8000")
    with serve_site(PROBE.encode(), rewrite=REGISTER_FIXTURES) as base:
        probes = map_parallel(lambda path: page_title(chrome, base + path, "PROBE:", flags), args.paths)

    failed = False
    for path, probe in zip(args.paths, probes):
        parts = probe.split(":", 2) if probe else []
        if len(parts) != 3:
            print(f"?? {path}: could not measure")
            failed = True
            continue
        scroll, client, blame = int(parts[0]), int(parts[1]), parts[2].strip()
        # Chrome's --dump-dom ignores --window-size, so compare the numbers the
        # page itself reports rather than the requested width.
        ok = scroll <= client
        failed = failed or not ok
        print(f"{'ok' if ok else 'OVERFLOW'} {path}: document {scroll}px in {client}px viewport")
        if blame:
            print(f"   widest elements past the edge: {blame}")

    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
