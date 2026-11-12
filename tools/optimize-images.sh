#!/usr/bin/env bash
# =================================================================
#  optimize-images.sh: one source image -> the two files the site expects
# -----------------------------------------------------------------
#  Usage:
#    tools/optimize-images.sh <image> [destination-folder]
#    tools/optimize-images.sh ~/Desktop/home-screen.png assets/img/mi-proyecto
#
#  Creates, in the destination folder (default: next to the source):
#    <name>.webp        at most 2400 px wide (never upscaled), quality 82
#    <name>-960w.webp   960 px wide, for phones (only if the source is wider)
#  and prints the width / height and a ready-to-paste include line.
#
#  The case includes (_includes/case/*.html) find the -960w variant on their
#  own: if it exists, they add the srcset; if not, they use the single file.
#
#  Uses the first tool it finds: cwebp (libwebp), ImageMagick (magick or
#  convert), or Python 3 with Pillow. Names: lowercase, no spaces
#  (spaces are replaced with "-").
#  This file is excluded from the Jekyll build (_config.yml).
# =================================================================
set -euo pipefail

MAX=2400
SMALL=960
Q=82

if [ $# -lt 1 ] || [ ! -f "$1" ]; then
  sed -n '3,22p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
fi

src="$1"
dest="${2:-$(dirname "$src")}"
mkdir -p "$dest"
base="$(basename "${src%.*}" | tr '[:upper:] ' '[:lower:]-')"
out="$dest/$base.webp"
out_small="$dest/$base-$SMALL""w.webp"

# Width / height of an image, with whatever is available
dims() {
  if command -v magick >/dev/null 2>&1; then magick identify -format '%w %h' "$1"
  elif command -v identify >/dev/null 2>&1; then identify -format '%w %h' "$1"
  elif command -v webpinfo >/dev/null 2>&1 && [[ "$1" == *.webp ]]; then
    webpinfo "$1" | awk '/Width:/{w=$2} /Height:/{h=$2} END{print w, h}'
  else python3 -c 'import sys; from PIL import Image; i=Image.open(sys.argv[1]); print(*i.size)' "$1"
  fi
  echo   # identify prints no newline: without it, "read" fails and set -e stops the script
}

read -r W H < <(dims "$src")
target=$(( W > MAX ? MAX : W ))

if command -v cwebp >/dev/null 2>&1; then
  tool="cwebp"
  cwebp -quiet -q "$Q" -metadata none -resize "$target" 0 "$src" -o "$out"
  if [ "$W" -gt "$SMALL" ]; then cwebp -quiet -q "$Q" -metadata none -resize "$SMALL" 0 "$src" -o "$out_small"; fi
elif command -v magick >/dev/null 2>&1 || command -v convert >/dev/null 2>&1; then
  tool="ImageMagick"
  im=$(command -v magick || command -v convert)
  "$im" "$src" -strip -resize "${target}x>" -quality "$Q" "$out"
  if [ "$W" -gt "$SMALL" ]; then "$im" "$src" -strip -resize "${SMALL}x" -quality "$Q" "$out_small"; fi
elif python3 -c 'import PIL' >/dev/null 2>&1; then
  tool="Pillow"
  python3 - "$src" "$out" "$out_small" "$target" "$SMALL" "$Q" <<'PY'
import sys
from PIL import Image
src, out, out_small, target, small, q = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6])
im = Image.open(src)
if im.mode not in ("RGB", "RGBA"):
    im = im.convert("RGBA" if "transparency" in im.info else "RGB")
def save(width, path):
    h = round(im.height * width / im.width)
    (im if width == im.width else im.resize((width, h), Image.LANCZOS)).save(path, "WEBP", quality=q, method=6)
save(target, out)
if im.width > small:
    save(small, out_small)
PY
else
  echo "No image tool found: install libwebp (cwebp), ImageMagick, or Pillow (pip install pillow)." >&2
  exit 2
fi

read -r OW OH < <(dims "$out")
echo "Tool: $tool"
echo "  $out  (${OW} x ${OH})"
if [ -f "$out_small" ]; then echo "  $out_small"; fi
# Site path: from "assets/" on (works with relative or absolute destinations)
case "$out" in
  */assets/*) web="/assets/${out##*/assets/}" ;;
  assets/*|./assets/*) web="/${out#./}" ;;
  *) web="/assets/img/<folder>/$base.webp" ;;
esac
echo
echo "Paste in the project .md:"
echo "{% include case/figure.html src=\"$web\" w=$OW h=$OH alt=\"\" caption=\"\" %}"
