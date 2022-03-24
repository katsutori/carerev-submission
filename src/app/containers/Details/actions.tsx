import { createAction } from '@reduxjs/toolkit';

const fetchDetails =  createAction('FETCH_DETAILS_REQUEST');

const fetchDetailsSuccess = createAction(
  'FETCH_DETAILS_SUCCESS',
  details => {
    return {
      payload: {
        details,
      },
    };
  },
);

const fetchDetailsError = createAction('FETCH_DETAILS_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

export const actions = {
  fetchDetails,
  fetchDetailsSuccess,
  fetchDetailsError,
};
