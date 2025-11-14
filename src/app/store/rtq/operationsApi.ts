import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'src/app/constants/general';
import { OperationPostParams, OperationPutParams, OperationPostResult } from 'src/pages/operationsScreen/type';
import type { RootState } from '../index';

export interface ApiErrorType {
  status?: number;
  data?: { message?: string; error?: string };
}

export const operationsApi = createApi({
  reducerPath: 'operationsApi',
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
  tagTypes: ['Operations'],
  endpoints: (builder) => ({
    getOperations: builder.query({
      query: () => ({
        url: '/operations',
        method: 'Get',
      }),
    }),
    addOperation: builder.mutation<OperationPostResult, OperationPostParams>({
      query: (operation) => ({
        url: '/operations',
        method: 'POST',
        body: {
          ...operation,
        },
      }),
    }),
    editOperation: builder.mutation<OperationPostResult, OperationPutParams>({
      query: ({ operation, id }) => ({
        url: `/operations/:${id}`,
        method: 'PUT',
        body: {
          ...operation,
        },
      }),
    }),
  }),
});

export const { useGetOperationsQuery, useAddOperationMutation, useEditOperationMutation } = operationsApi;
