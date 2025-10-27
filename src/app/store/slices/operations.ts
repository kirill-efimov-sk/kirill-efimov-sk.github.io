import { createSlice, PayloadAction } from '@reduxjs/toolkit/src';
import { Operation } from 'src/utils/dataListGenerator';
import { RootState } from '../index';

export const operationsSlice = createSlice({
  name: 'operations',
  initialState: null,
  reducers: {
    set: (_, action: PayloadAction<Operation[]>) => action.payload,
  },
});

export const operationsActions = operationsSlice.actions;

export const operationsSelectors = {
  get: (state: RootState): RootState['operations'] => state.operations,
};

export const { reducer: operations } = operationsSlice;
