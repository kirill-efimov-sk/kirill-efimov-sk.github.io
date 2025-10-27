import { createSlice } from '@reduxjs/toolkit';
import { ProfileFormValues } from 'src/features/forms/profileForm/types';
import { RootState } from '../index';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    set: (_, action: { payload: ProfileFormValues; type: string }) => action.payload,
  },
});

export const profileActions = profileSlice.actions;

export const profileSelectors = {
  get: (state: RootState): RootState['profile'] => state.profile,
};

export const { reducer: profile } = profileSlice;
