import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const initializedSlice = createSlice({
  name: 'initialized',
  initialState: null,
  reducers: {
    init: () => true,
  },
});

export const initializedActions = initializedSlice.actions;

export const initializedSelectors = {
  get: (state: RootState): RootState['initialized'] => state.initialized,
};

export const { reducer: initialized } = initializedSlice;
