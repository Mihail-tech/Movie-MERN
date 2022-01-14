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
    [userUpdateSucceeded]: (state, action) => {
      const data = { processing: true, ...action.payload };
      return data;
    },
    [userUpdateFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
    [avatarUpdateRequested]: (state, action) => ({
      state,
      processing: true,
    }),
    [avatarUpdateSucceeded]: (state, action) => {
      return { processing: true, ...action.payload };
    },
    [avatarUpdateFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  initialState
);

export default settingReducer;
