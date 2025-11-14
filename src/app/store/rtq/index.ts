import { authApi } from './authApi';
import { productsApi } from './productsApi';
import { operationsApi } from './operationsApi';

// Собираем все Middleware в один массив
const middlewares = [authApi.middleware, productsApi.middleware, operationsApi.middleware];

// Собираем все Reducers для store
const reducers = {
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [operationsApi.reducerPath]: operationsApi.reducer,
};

export const apiConfigureStore = { middlewares, reducers };

export const api = { auth: authApi, products: productsApi, operations: operationsApi };
