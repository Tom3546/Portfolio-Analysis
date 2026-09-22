import { rgb, formatRgb } from "culori";

export function getRgbColoraaa(initialColor: string) {
  const rgbObject = rgb(initialColor);
  const rgbColor = formatRgb(rgbObject);

  const styles = getComputedStyle(document.documentElement);
  return styles.getPropertyValue(rgbColor ?? "#000000");
}

export function getColor(varName: string): string {
  const styles = getComputedStyle(document.documentElement);
  const oklchColor = styles.getPropertyValue(varName).trim();

  const rgbObject = rgb(oklchColor);
  const rgbColor = formatRgb(rgbObject);

  return rgbColor ?? "#000000";
}
