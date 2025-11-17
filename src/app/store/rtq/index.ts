import { authApi } from './authApi';
import { productsApi } from './productsApi';
import { categoriesApi } from './categoriesApi';
import { filesApi } from './filesApi';

// Собираем все Middleware в один массив
const middlewares = [authApi.middleware, productsApi.middleware, categoriesApi.middleware, filesApi.middleware];

// Собираем все Reducers для store
const reducers = {
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [filesApi.reducerPath]: filesApi.reducer,
};

export const apiConfigureStore = { middlewares, reducers };

export const api = { auth: authApi, products: productsApi, categories: categoriesApi, files: filesApi };
