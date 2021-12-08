import { handleActions } from 'redux-actions';

import {loginUserRequested, loginUserSucceeded, loginUserFailed} from '../actions';

const initialState = {
  processing: false,
    errors: [],
}

const loginReducer = handleActions(
  {
    [loginUserRequested]: (state, action) => ({
      processing: true,
    }),
    [loginUserSucceeded]: (state, action) => ({
      processing: false,
    }),
    [loginUserFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  initialState
);

export default loginReducer;
