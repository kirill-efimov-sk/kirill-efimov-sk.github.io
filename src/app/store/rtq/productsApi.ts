import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'src/app/constants/general';
import { Filters, ProductPutParams, ProductPostData } from './types';
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

      return headers;
    },
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters: Filters = {}) => {
        const queryParams = Object.entries(filters).reduce((params, [key, value]) => {
          if (value === undefined || value === null) return params;

          if (typeof value === 'string') {
            params.append(key, value);
          } else if (Array.isArray(value) && value.length > 0) {
            params.append(key, JSON.stringify(value));
          } else if (typeof value === 'object' && Object.keys(value).length > 0) {
            params.append(key, JSON.stringify(value));
          }

          return params;
        }, new URLSearchParams());

        return {
          url: `/products?${queryParams.toString()}`,
          method: 'GET',
        };
      },
    }),
    addProduct: builder.mutation<ProductPostData, FormData>({
      query: (formData) => ({
        url: '/products',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Products'],
    }),
    editProduct: builder.mutation<ProductPostData, ProductPutParams>({
      query: ({ id, formData }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery, useAddProductMutation, useEditProductMutation } =
  productsApi;
