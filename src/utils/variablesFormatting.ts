export const truncatingText = (description: string, truncateCount: number): string => {
  return description.length > truncateCount ? description.substring(0, truncateCount) + '<...>' : description;
};

export const formatingDate = (date: string, format: string): string => {
  const df = new Date(date);
  const year = String(df.getFullYear());
  const month = String(df.getMonth() + 1).padStart(2, '0');
  const day = String(df.getDate()).padStart(2, '0');

  return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
};
