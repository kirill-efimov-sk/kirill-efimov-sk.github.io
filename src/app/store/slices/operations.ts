import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Operation } from 'src/utils/dataListGenerator';
import { RootState } from '../index';

export type OperationsState = Operation[];

const initialState: OperationsState = [];

export const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<OperationsState>) => action.payload,
    add: (state, action: PayloadAction<OperationsState>) => [...state, ...action.payload],
    update: (state, action: PayloadAction<Operation>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
  },
});

export const operationsActions = operationsSlice.actions;

export const operationsSelectors = {
  get: (state: RootState): RootState['operations'] => state.operations,
};

export const { reducer: operations } = operationsSlice;
