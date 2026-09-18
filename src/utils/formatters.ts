export const formatSign = (val: number): string => {
  const formattedVal = val.toLocaleString("pl-PL");
  if (val > 0) return `+${formattedVal}`;
  return formattedVal;
};
