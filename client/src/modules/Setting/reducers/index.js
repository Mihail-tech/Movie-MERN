import { handleActions } from 'redux-actions';

import {
  userUpdateRequested,
  userUpdateSucceeded,
  userUpdateFailed,
  avatarUpdateRequested,
  avatarUpdateSucceeded,
  avatarUpdateFailed,
} from '../action';

const initialState = {
  processing: false,
  errors: [],
};

const settingReducer = handleActions(
  {
    [userUpdateRequested]: (state, action) => ({
      state,
      processing: true,
    }),
    [userUpdateSucceeded]: (state, action) => ({
      processing: true,
      ...action.payload,
    }),
    [userUpdateFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
    [avatarUpdateRequested]: (state, action) => ({
      state,
      processing: true,
    }),
    [avatarUpdateSucceeded]: (state, action) => ({
      processing: true,
      ...action.payload,
    }),
    [avatarUpdateFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  initialState
);

export default settingReducer;
