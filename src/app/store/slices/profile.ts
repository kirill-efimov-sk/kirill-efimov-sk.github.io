import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ProfileFormValues } from 'src/features/forms/profileForm/types';
import { RootState } from '../index';

export const PROFILE_KEY = 'profile';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<ProfileFormValues>) => action.payload,
    clear: () => null,
  },
});

export const profileActions = profileSlice.actions;

export const profileSelectors = {
  get: (state: RootState): RootState['profile'] => state.profile,
};

export const { reducer: profile } = profileSlice;
