import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './reducer';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.details || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  detailsState => detailsState.isLoading,
);

export const selectError = createSelector(
  [selectDomain],
  detailsState => detailsState.error,
);

export const selectDetails = createSelector(
  [selectDomain],
  detailsState => detailsState.details,
);
