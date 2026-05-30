#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/photos"
DEST="$ROOT/public/images"
FB="$DEST/facebook"

if [[ ! -d "$SRC" ]]; then
  echo "Missing folder: photos/"
  exit 1
fi

mkdir -p "$DEST" "$FB"

profile="$SRC/profile.jpg"
[[ -f "$profile" ]] || profile="$SRC/netlify.toml.jpg"

for name in hero.jpg gallery-1.jpg gallery-2.jpg gallery-3.jpg; do
  if [[ ! -f "$SRC/$name" ]]; then
    echo "Missing: photos/$name"
    exit 1
  fi
done

if [[ ! -f "$profile" ]]; then
  echo "Missing: photos/profile.jpg (or photos/netlify.toml.jpg)"
  exit 1
fi

cp "$SRC/hero.jpg" "$DEST/hero.jpg" && cp "$SRC/hero.jpg" "$FB/hero.jpg"
cp "$profile" "$DEST/profile.jpg" && cp "$profile" "$FB/profile.jpg"
cp "$SRC/gallery-1.jpg" "$DEST/gallery-1.jpg" && cp "$SRC/gallery-1.jpg" "$FB/gallery-1.jpg"
cp "$SRC/gallery-2.jpg" "$DEST/gallery-2.jpg" && cp "$SRC/gallery-2.jpg" "$FB/gallery-2.jpg"
cp "$SRC/gallery-3.jpg" "$DEST/gallery-3.jpg" && cp "$SRC/gallery-3.jpg" "$FB/gallery-3.jpg"

g4="$SRC/gallery-4.jpg"
[[ -f "$g4" ]] || g4="$SRC/hero.jpg"
cp "$g4" "$DEST/gallery-4.jpg" && cp "$g4" "$FB/gallery-4.jpg"

echo "Synced photos/ → public/images/ (+ facebook/)"
