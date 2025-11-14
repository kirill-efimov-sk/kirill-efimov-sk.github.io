import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { token } from './slices/token';
import { initialized } from './slices/initialized';
import { profile } from './slices/profile';
import { cart } from './slices/cart';
import { operations } from './slices/operations';
import { products } from './slices/products';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token,
    initialized,
    profile,
    cart,
    operations,
    products,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
