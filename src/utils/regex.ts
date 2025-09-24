export const regex = (symbols: string): RegExp => {
  return new RegExp(`[${symbols.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);
};
