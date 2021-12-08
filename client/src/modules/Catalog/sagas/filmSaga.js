import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import { getFilmSucceeded, getFilmFailed } from '../actions';

const getToken = state => state.account.token;

function* filmWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.filmId, token, action.payload);
    yield put(getFilmSucceeded(response.data));
  } catch (err) {
    yield put(getFilmFailed(err.response.data));
  }
};

function* filmWatcher() {
  yield takeLatest('FILM_GET_REQUESTED', filmWorker);
};

export default filmWatcher;
