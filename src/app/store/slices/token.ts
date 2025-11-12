import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const TOKEN_KEY = 'token';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<string>) => action.payload,
    logout: () => null,
  },
});

export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: RootState): RootState['token'] => state.token,
};

export const { reducer: token } = tokenSlice;
