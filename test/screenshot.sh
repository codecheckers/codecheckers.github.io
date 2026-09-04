#!/usr/bin/env bash
# Render pages of the built site at several viewport widths with headless Chrome.
#
#   test/screenshot.sh [-b] [-o OUTDIR] [-w WIDTHxHEIGHT[,...]] [PATH ...]
#
#   -b            run `bundle exec jekyll build` first (otherwise reuse _site/)
#   -o OUTDIR     where to write the PNGs (default: a fresh dir under /tmp)
#   -w LIST       comma-separated viewports (default: the three below)
#   PATH ...      site paths to shoot, e.g. / /faq/ (default: /)
#
# Prints the written file paths, one per line.
set -euo pipefail

cd "$(dirname "$0")/.."

# 393x851 = Fairphone FP4 and most current Android phones in CSS pixels
# 768x1024 = tablet / Bootstrap md
# 1280x900 = desktop
VIEWPORTS="393x851,768x1024,1280x900"
OUTDIR=""
BUILD=0

while getopts "bo:w:" opt; do
  case "$opt" in
    b) BUILD=1 ;;
    o) OUTDIR="$OPTARG" ;;
    w) VIEWPORTS="$OPTARG" ;;
    *) exit 2 ;;
  esac
done
shift $((OPTIND - 1))

PATHS=("$@")
[ ${#PATHS[@]} -eq 0 ] && PATHS=("/")

[ "$BUILD" -eq 1 ] && bundle exec jekyll build --trace >/dev/null

[ -d _site ] || { echo "no _site/, run with -b" >&2; exit 1; }
[ -n "$OUTDIR" ] || OUTDIR="$(mktemp -d /tmp/codecheck-shots-XXXX)"
mkdir -p "$OUTDIR"

CHROME="$(command -v google-chrome || command -v chromium || command -v chromium-browser)"

PORT=$(python3 -c 'import socket; s=socket.socket(); s.bind(("127.0.0.1",0)); print(s.getsockname()[1]); s.close()')
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory _site >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT
sleep 1

for p in "${PATHS[@]}"; do
  slug=$(echo "$p" | sed 's#^/##; s#/$##; s#/#-#g'); slug=${slug:-index}
  IFS=, read -ra sizes <<< "$VIEWPORTS"
  for size in "${sizes[@]}"; do
    out="$OUTDIR/$slug-$size.png"
    "$CHROME" --headless --disable-gpu --hide-scrollbars --no-sandbox \
      --window-size="${size/x/,}" --virtual-time-budget=8000 \
      --screenshot="$out" "http://127.0.0.1:$PORT$p" >/dev/null 2>&1
    echo "$out"
  done
done
