import { handleActions } from 'redux-actions';
import {unsetCurrentUser} from '../actions';
import {loginUserSucceeded} from '../../Login/actions';

const initialState = {
  username: '',
  email: '',
  password: '',
  pic: '',
  token: '',
};

const accountReducer = handleActions(
  {
    [loginUserSucceeded]: (state, action) => ({
      ...action.payload
    }),
    [unsetCurrentUser]: (state, action) => initialState,
  },
  initialState
);

export default accountReducer;