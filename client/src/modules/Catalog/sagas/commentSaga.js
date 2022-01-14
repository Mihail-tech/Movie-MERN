import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import {commentSucceeded, commentFailed, commentRequested} from '../actions';

const getToken = state => state.account.token;

function* commentWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.comment, action.payload, token);
    yield put(commentSucceeded(response.data));

  } catch (err) {
    yield put(commentFailed(err.response.data));
  }
};

function* commentWatcher() {
  yield takeLatest(commentRequested, commentWorker);
};

export default commentWatcher;