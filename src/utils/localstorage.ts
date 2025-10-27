export const storage = {
  get: (key: string): string => localStorage.getItem(key),
  set: (key: string, value: string): void => localStorage.setItem(key, value),
  remove: (keys: string[]): void => keys.forEach((key) => localStorage.removeItem(key)),
  clear: (): void => localStorage.clear(),
};
