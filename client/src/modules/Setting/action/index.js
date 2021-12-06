import { createAction } from 'redux-actions';

export const userUpdateRequested = createAction('USER_UPDATE_REQUESTED');
export const userUpdateSucceeded = createAction('USER_UPDATE_SUCCEEDED');
export const userUpdateFailed = createAction('USER_UPDATE_FAILED');

export const avatarUpdateRequested = createAction('AVATAR_UPDATE_REQUESTED');
export const avatarUpdate = createAction('AVATAR_UPDATE');
