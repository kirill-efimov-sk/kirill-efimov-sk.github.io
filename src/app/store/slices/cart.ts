import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'src/utils/dataListGenerator';
import { RootState } from '../index';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    set: (_, action: { payload: Product[]; type: string }) => action.payload,
  },
});

export const cartActions = cartSlice.actions;

export const cartSelectors = {
  get: (state: RootState): RootState['cart'] => state.cart,
};

export const { reducer: cart } = cartSlice;
