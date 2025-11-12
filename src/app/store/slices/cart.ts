import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { CartProductItemProps } from 'src/pages/cartScreen';
import { RootState } from '../index';

export type CartState = CartProductItemProps[];

const initialState: CartState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<CartState>) => action.payload,
    add: (state, action: PayloadAction<CartState>) => [...state, ...action.payload],
    update: (state, action: PayloadAction<CartProductItemProps>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    delete: (state, action: PayloadAction<CartProductItemProps>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const cartActions = cartSlice.actions;

export const cartSelectors = {
  get: (state: RootState): RootState['cart'] => state.cart,
};

export const { reducer: cart } = cartSlice;
