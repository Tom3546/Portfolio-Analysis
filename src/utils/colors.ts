import { rgb, formatRgb } from "culori";

export function getColor(varName: string): string {
  const styles = getComputedStyle(document.documentElement);
  const oklchColor = styles.getPropertyValue(`--${varName}`).trim();

  const rgbObject = rgb(oklchColor);
  const rgbColor = formatRgb(rgbObject);

  return rgbColor ?? "#000000";
}
