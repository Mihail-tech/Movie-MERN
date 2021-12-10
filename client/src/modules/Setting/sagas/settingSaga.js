import { call, put, takeLatest, select } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { setting } from '../../../api/requests';
import { history } from '../../../redux/store';
import { userUpdateSucceeded, userUpdateFailed } from '../action';

const getToken = state => state.account.token;

function* settingWorker(action) {
  console.log(action)
  try {
    const token = yield select(getToken);

    const response = yield call(setting, token, action.payload);
    yield put(
      userUpdateSucceeded({
        username: response.data.username,
        email: response.data.email,
        password: response.data.password,
        pic: response.data.pic,
        token: response.data.token,
      })
    );
    yield call(history.push, '/setting');
  } catch (err) {
    const errors = [];

    if (err.response.status === 409) {
        if (err.response.data.includes('username')) {
          errors.push('Username is taken');
        }
        if (err.response.data.includes('email')) {
          errors.push('Email address is already used for another account');
        }
      } else {
        for (let key in err.response.data) {
            errors.push(err.response.data[key]);
        }
      }

    yield put(userUpdateFailed(errors));
  }
};

function* settingWatcher() {
    yield takeLatest('USER_UPDATE_REQUESTED', settingWorker);
  };


export default settingWatcher;