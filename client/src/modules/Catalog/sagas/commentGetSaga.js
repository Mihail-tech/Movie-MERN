import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import {commentGetSucceeded, commentGetFailed, commentGetRequested} from '../actions';

const getToken = state => state.account.token;

function* commentGetWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.comments, action.payload, token);
    yield put(commentGetSucceeded(response.data));

  } catch (err) {
    yield put(commentGetFailed(err));
  }
};

function* commentGetWatcher() {
  yield takeLatest(commentGetRequested, commentGetWorker);
};

export default commentGetWatcher;