import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/utils/dataListGenerator';
import { RootState } from '../index';

export type ProductsState = Product[];

const initialState: ProductsState = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<ProductsState>) => action.payload,
    add: (state, action: PayloadAction<ProductsState>) => [...state, ...action.payload],
    update: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export const productsSelectors = {
  get: (state: RootState): RootState['products'] => state.products,
};

export const { reducer: products } = productsSlice;
