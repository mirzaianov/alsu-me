function decreaseSaturation(hslaColor) {
  const colorComponents = hslaColor
    .replace('hsla(', '')
    .replace(')', '')
    .split(',');

  const h = parseInt(colorComponents[0].trim(), 10);
  const s = parseInt(colorComponents[1].trim(), 10);
  const l = parseInt(colorComponents[2].trim(), 10);
  const a = parseInt(colorComponents[3].trim(), 10);

  const initialColor = `hsla(${h},${s}%,${l}%,${a})`;
  const newColor = `hsla(${h},${Math.floor(s * 0.5)}%,${l}%,${a})`;

  return [initialColor, newColor];
}

export default decreaseSaturation;
