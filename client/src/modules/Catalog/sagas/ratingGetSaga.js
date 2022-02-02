import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import { updateRatingGetRequest, updateRatingGetSuccess, updateRatingGetFail } from '../actions';

const getToken = state => state.account.token;

function* ratingGetWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.ratingGet, action.payload, token);

    yield put(updateRatingGetSuccess(response.data));
  } catch (err) {
    yield put(updateRatingGetFail(err));
  }
}

function* ratingGetWatcher() {
  yield takeLatest(updateRatingGetRequest, ratingGetWorker);
}

export default ratingGetWatcher;
