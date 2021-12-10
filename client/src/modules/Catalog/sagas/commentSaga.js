import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import {commentSucceeded, commentFailed} from '../actions';

const getToken = state => state.account.token;

function* commentWorker(action, _id) {
    console.log(action.payload, 'action')
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.comment, action.payload);
    console.log(response.data, 'response')
    yield put(commentSucceeded(response.data));

  } catch (err) {
    yield put(commentFailed(err.response.data));
  }
};

function* commentWatcher() {
  yield takeLatest('COMMENT_REQUESTED', commentWorker);
};

export default commentWatcher;