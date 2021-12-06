import { handleActions } from 'redux-actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  pic: '',
  token: '',
};

const accountReducer = handleActions(
  {
    USER_LOGIN_SUCCEEDED: (state, action) => ({
      id: action.payload.id,
      username: action.payload.username,
      email: action.payload.email,
      password: action.payload.password,
      pic: action.payload.pic,
      token: action.payload.token,
    }),
    CURRENT_USER_UNSET: (state, action) => initialState,
  },
  initialState
);

export default accountReducer;