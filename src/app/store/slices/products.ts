import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'src/utils/dataListGenerator';
import { RootState } from '../index';

export const productsSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    set: (_, action: { payload: Product[]; type: string }) => action.payload,
  },
});

export const productsActions = productsSlice.actions;

export const productsSelectors = {
  get: (state: RootState): RootState['products'] => state.products,
};

export const { reducer: products } = productsSlice;
