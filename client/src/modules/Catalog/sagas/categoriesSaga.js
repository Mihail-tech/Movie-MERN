
import { call, put, select, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import { catalog } from '../../../api/requests';
import { getCategoriesSucceeded, getCategoriesFailed, getCategoriesRequested } from '../actions';

const getToken = state => state.account.token;

function* categoriesWorker(action) {
  try {
    const token = yield select(getToken);

    const response = yield call(catalog.getCategories, token);
    yield put(getCategoriesSucceeded(response.data));
  } catch (err) {
    yield put(getCategoriesFailed(err.response.data));
  }
};

function* categoriesWatcher() {
  yield takeLatest(getCategoriesRequested, categoriesWorker);
};

export default categoriesWatcher;
