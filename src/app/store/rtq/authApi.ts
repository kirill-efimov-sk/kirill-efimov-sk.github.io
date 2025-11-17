import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { commandId, baseUrl } from 'src/app/constants/general';
import { AuthPostData, AuthResult } from './types';
import type { RootState } from '../index';

export interface ApiErrorType {
  status?: number;
  data?: { message?: string; error?: string };
}

export const authApi = createApi({
  reducerPath: 'authApi',
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
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResult, AuthPostData>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: {
          commandId,
          ...credentials,
        },
      }),
    }),
    signIn: builder.mutation<AuthResult, AuthPostData>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: {
          ...credentials,
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
