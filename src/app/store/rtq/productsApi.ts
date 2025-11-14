import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'src/app/constants/general';
import { ProductPostParams, ProductPutParams, ProductPostResult } from 'src/pages/productsScreen/type';
import type { RootState } from '../index';

export interface ApiErrorType {
  status?: number;
  data?: { message?: string; error?: string };
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      headers.set('content-type', 'application/json');

      return headers;
    },
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'Get',
      }),
    }),
    addProduct: builder.mutation<ProductPostResult, ProductPostParams>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: {
          ...product,
        },
      }),
    }),
    editProduct: builder.mutation<ProductPostResult, ProductPutParams>({
      query: ({ product, id }) => ({
        url: `/products/:${id}`,
        method: 'PUT',
        body: {
          ...product,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useEditProductMutation } = productsApi;
