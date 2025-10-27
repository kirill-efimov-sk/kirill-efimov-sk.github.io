import { createSlice, PayloadAction } from '@reduxjs/toolkit/src';
import { ProfileFormValues } from 'src/features/forms/profileForm/types';
import { RootState } from '../index';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<ProfileFormValues>) => action.payload,
  },
});

export const profileActions = profileSlice.actions;

export const profileSelectors = {
  get: (state: RootState): RootState['profile'] => state.profile,
};

export const { reducer: profile } = profileSlice;
