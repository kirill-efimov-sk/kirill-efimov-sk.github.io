const baseWidth = 1920;
const baseFontSize = 44;

export const generateTargetFontSize = (displayWidth: number) => {
  const scale = Math.sqrt(displayWidth / baseWidth);
  const result = Math.max(baseFontSize * scale, 18);

  return result;
};
