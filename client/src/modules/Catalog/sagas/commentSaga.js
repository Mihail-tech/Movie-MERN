import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import {commentPost} from '../actions';

const getToken = state => state.account.token;

function* commentWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.comment, token, action.payload);
    console.log(response.data)
    yield put(commentPost(response.data));

  } catch (err) {
    yield put(commentPost(err.response.data));
  }
}

function* commentWatcher() {
  yield takeLatest('COMMENT_POST', commentWorker);
}

export default commentWatcher;