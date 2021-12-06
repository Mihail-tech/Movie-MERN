
import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import { getFilmsSucceeded, getFilmsFailed, updateHasMore } from '../actions';

const getToken = state => state.account.token;

function* filmsWorker(action) {
  try {
    const token = yield select(getToken);
    const settings = action.payload;

    let query = '?';
    for (let key in settings) {
      query += settings[key] ? `${key}=${settings[key]}&` : '';
    }
    query = query.slice(0, -1);

    const response = yield call(catalog.getFilms, token, query);
    yield put(getFilmsSucceeded(response.data.films));
    yield put(updateHasMore(response.data.hasMore));
  } catch (err) {
    yield put(getFilmsFailed(err.response.data));
  }
}

function* filmsWatcher() {
  yield takeLatest('FILMS_GET_REQUESTED', filmsWorker);
}


export default filmsWatcher;
