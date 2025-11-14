import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { token } from './slices/token';
import { initialized } from './slices/initialized';
import { profile } from './slices/profile';
import { cart } from './slices/cart';
import { operations } from './slices/operations';
import { products } from './slices/products';
import { apiConfigureStore } from './rtq';
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
    ...apiConfigureStore.reducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...apiConfigureStore.middlewares, sagaMiddleware),
});

setupListeners(store.dispatch);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
