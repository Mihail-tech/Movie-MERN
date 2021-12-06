import { createAction } from 'redux-actions';

export const registerUserRequested = createAction('USER_REGISTER_REQUESTED');
export const registerUserSucceeded = createAction('USER_REGISTER_SUCCEEDED');
export const registerUserFailed = createAction('USER_REGISTER_FAILED');
