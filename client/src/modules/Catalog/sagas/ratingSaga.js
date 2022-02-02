import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import { updateRatingRequest, updateRatingSuccess, updateRatingFail } from '../actions';

const getToken = state => state.account.token;

function* ratingWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.rating, action.payload, token);

    yield put(updateRatingSuccess(response.data));
  } catch (err) {
    yield put(updateRatingFail(err));
  }
}

function* ratingWatcher() {
  yield takeLatest(updateRatingRequest, ratingWorker);
}

export default ratingWatcher;
