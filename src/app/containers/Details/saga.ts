import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { requestDetails } from 'utils/request';
import { actions } from './actions';


export function* fetchDetails(action) {

  const requestURL = `https://api.carerev.com/api/v1/countries/${action.payload.id}`;

  try {

    const details = yield call(requestDetails, requestURL);

    if (details) {
      yield put(actions.fetchDetailsSuccess(details));
    } else {
      yield put(actions.fetchDetailsError('No countries found.'));
    }
  } catch (err) {
      yield put(actions.fetchDetailsError(err.toString()));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
 export function* saga() {
  yield takeLatest("DETAILS_FETCH_REQUESTED", fetchDetails);
}
