import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import { getFilmSucceeded, getFilmFailed, getFilmRequested, updateRatingSuccess } from '../actions';

const getToken = state => state.account.token;

function* filmWorker(action) {
  console.log(action.payload, 'saga')
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.filmId, token, action.payload);
    console.log(response.data.rating)
    yield put(getFilmSucceeded(response.data));
    yield put(updateRatingSuccess(response.data.rating))
  } catch (err) {
    yield put(getFilmFailed(err.response.data));
  }
};

function* filmWatcher() {
  yield takeLatest(getFilmRequested, filmWorker);
};

export default filmWatcher;
