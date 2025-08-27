// eslint-disable-next-line import/no-unresolved
import { addOperations, addProducts, Operation, Product } from '../utils/dataListGenerator';

export const useDataGenerator = (): {
  createProducts: (count: number) => Product[];
  createOperations: (count: number) => Operation[];
} => {
  const createProducts = (count: number) => addProducts(count);
  const createOperations = (count: number) => addOperations(count);

  return { createProducts, createOperations };
};
