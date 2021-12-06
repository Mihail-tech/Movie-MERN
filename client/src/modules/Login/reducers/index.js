import { handleActions } from 'redux-actions';

const initialState = {
  processing: false,
    errors: [],
}

const loginReducer = handleActions(
  {
    USER_LOGIN_REQUESTED: (state, action) => ({
      processing: true,
    }),
    USER_LOGIN_SUCCEEDED: (state, action) => ({
      processing: false,
    }),
    USER_LOGIN_FAILED: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
  },
  initialState
);

export default loginReducer;
