#!/usr/bin/env bash
set -e

mkdir -p public/images

generate_webp() {
  local name="$1"
  local bg="$2"
  local accent1="$3"
  local accent2="$4"

  convert -size 1200x675 xc:"${bg}" \
    -fill "${accent1}" -draw "rectangle 0,0 1200,8" \
    -fill "#181a20" -draw "rectangle 40,40 1160,635" \
    -fill "#22272e" -draw "rectangle 60,60 1140,615" \
    -fill "${accent1}" -draw "circle 600,337 600,450" \
    -fill "#161b22" -draw "circle 600,337 600,410" \
    -fill "${accent2}" -draw "rectangle 450,330 750,345" \
    -fill "${accent1}" -draw "rectangle 80,80 260,110" \
    -fill "#2d333b" -draw "line 80,560 1120,560" \
    -fill "${accent1}" -draw "circle 520,380 520,405" \
    -fill "${accent1}" -draw "circle 680,380 680,405" \
    -quality 85 "public/images/${name}"
  echo "Created public/images/${name}"
}

generate_webp "tesla-brand-guide.webp" "#090a0f" "#e11d48" "#f43f5e"
generate_webp "tesla-model-3.webp" "#0c0e14" "#dc2626" "#ef4444"
generate_webp "tesla-model-y.webp" "#0b0d13" "#e11d48" "#f87171"
generate_webp "tesla-electric-motor.webp" "#080a0f" "#b91c1c" "#e11d48"
generate_webp "tesla-car-price.webp" "#0c0d12" "#ef4444" "#fca5a5"
generate_webp "tesla-charging-station.webp" "#0a0c10" "#dc2626" "#f87171"
generate_webp "tesla-autopilot-dashboard.webp" "#090b0e" "#e11d48" "#fb7185"
generate_webp "tesla-battery-pack.webp" "#0d0f14" "#991b1b" "#dc2626"
generate_webp "electric-vs-petrol-car.webp" "#0c0e12" "#dc2626" "#e11d48"
cp public/images/electric-vs-petrol-car.webp public/images/tesla-vs-petrol-cars.webp
generate_webp "future-electric-vehicles.webp" "#0a0d14" "#e11d48" "#f43f5e"

rm -f public/images/test.webp
echo "Successfully generated all 10 real WebP files in public/images/!"
