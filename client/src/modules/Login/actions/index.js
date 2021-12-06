import { createAction } from 'redux-actions';

export const loginUserRequested = createAction('USER_LOGIN_REQUESTED');
export const loginUserSucceeded = createAction('USER_LOGIN_SUCCEEDED');
export const loginUserFailed = createAction('USER_LOGIN_FAILED');
