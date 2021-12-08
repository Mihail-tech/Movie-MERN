import { handleActions } from 'redux-actions';

import {registerUserRequested, registerUserSucceeded, registerUserFailed} from '../actions';

const initialState = {
  processing: false,
    errors: [],
}

const registerReducer = handleActions(
  {
    [registerUserRequested]: (state, action) => ({
      processing: true,
    }),
    [registerUserSucceeded]: (state, action) => ({
      processing: false,
    }),
    [registerUserFailed]: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  initialState
);

export default registerReducer;