import { handleActions } from 'redux-actions';

import {
  userUpdateSucceeded,
  userUpdateFailed,
  avatarUpdateFailed,
} from '../action';

const initialState = {
  processing: false,
  errors: [],
};

const settingReducer = handleActions(
  {
    [userUpdateSucceeded]: (state, action) => {
      const data = { processing: true, ...action.payload };
      return data;
    },
    [userUpdateFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),

    [avatarUpdateFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  initialState
);

export default settingReducer;
