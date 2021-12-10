import { call, put, takeLatest, select } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { setting } from '../../../api/requests';

import { avatarUpdateSucceeded, avatarUpdateFailed } from '../action';

const getToken = state => state.account.token;

function* updatePicWorker(action) {
    console.log(action)
  try {
    // const token = yield select(getToken);

    const response = yield call(setting.updatePic, action.payload);
    yield put(avatarUpdateSucceeded(response.data));
  } catch (err) {

    yield put(avatarUpdateFailed(err));
  }
};

function* updatePicWatcher() {
    yield takeLatest('AVATAR_UPDATE_REQUESTED', updatePicWorker);
  };


export default updatePicWatcher;