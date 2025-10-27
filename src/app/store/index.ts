import { configureStore } from '@reduxjs/toolkit';
import { token } from './slices/token';
import { initialized } from './slices/initialized';
import { profile } from './slices/profile';
import { cart } from './slices/cart';
import { operations } from './slices/operations';
import { products } from './slices/products';

export const store = configureStore({
  reducer: {
    token,
    initialized,
    profile,
    cart,
    operations,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
