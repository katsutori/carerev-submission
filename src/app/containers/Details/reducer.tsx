import { createReducer } from '@reduxjs/toolkit';
import { idText } from 'typescript';
import { DetailsState } from './types';

export const key = 'details';

export const initialState: DetailsState = {
  details: [],
  error: undefined,
  isLoading: false,
};

export const detailsReducer = createReducer(initialState, {
  FETCH_DETAILS_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_DETAILS_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.details = action.payload.details;
  },
  FETCH_DETAILS_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
