
import { call, put, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { auth } from '../../../api/requests';
import { history } from '../../../redux/store';
import { loginUserSucceeded, loginUserFailed } from '../actions';

function* loginWorker(action) {
  try {
    const response = yield call(auth.login, action.payload);
    yield put(
      loginUserSucceeded({
        username: response.data.username,
        email: response.data.email,
        password: response.data.password,
        pic: response.data.pic,
        token: response.data.token,
      })
    );
    yield call(history.push, '/catalog');
  } catch (err) {
    const errors = [];

    for (let key in err.response.data) {
      errors.push(err.response.data[key]);
    }

    yield put(loginUserFailed(errors));
  }
}

function* loginWatcher() {
  yield takeLatest('USER_LOGIN_REQUESTED', loginWorker);
}

export default loginWatcher;
