export const truncatingText = (description: string, truncateCount: number): string => {
  return description.length > truncateCount ? description.substring(0, truncateCount) + '<...>' : description;
};

export const formatingDate = (parsedDate: Date): string => {
  return isNaN(parsedDate.getTime()) ? 'Некорректная дата' : parsedDate.toLocaleDateString();
};
