import { call, put, takeLatest, select } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { setting } from '../../../api/requests';

import { avatarUpdateSucceeded, avatarUpdateFailed, avatarUpdateRequested } from '../action';

const getToken = state => state.account.token;

function* updatePicWorker(action) {
    console.log(action.payload, 'action saga')
  try {
    const token = yield select(getToken);

    const response = yield call(setting.updatePic, action.payload, token);
    console.log(response.data)
    yield put(avatarUpdateSucceeded(response.data));
  } catch (err) {

    yield put(avatarUpdateFailed(err));
  }
};

function* updatePicWatcher() {
    yield takeLatest(avatarUpdateRequested, updatePicWorker);
  };


export default updatePicWatcher;