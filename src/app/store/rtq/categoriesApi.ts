import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'src/app/constants/general';
import { CategoryPutParams, CategoryPostData, Filters } from './types';
import type { RootState } from '../index';

export interface ApiErrorType {
  status?: number;
  data?: { message?: string; error?: string };
}

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
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
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getCategories: builder.query({
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
          url: `/categories?${queryParams.toString()}`,
          method: 'GET',
        };
      },
    }),
    addCategory: builder.mutation<CategoryPostData, FormData>({
      query: (formData) => ({
        url: '/categories',
        method: 'POST',
        body: formData,
      }),
    }),
    editCategory: builder.mutation<CategoryPostData, CategoryPutParams>({
      query: ({ id, formData }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),
  }),
});

export const { useAddCategoryMutation, useEditCategoryMutation, useGetCategoriesQuery } = categoriesApi;
