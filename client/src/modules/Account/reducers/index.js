import { handleActions } from 'redux-actions';
import {unsetCurrentUser} from '../actions';
import {loginUserSucceeded} from '../../Login/actions';
import {avatarUpdateSucceeded} from '../../Setting/action';

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
    [avatarUpdateSucceeded]: (state, action) => {
      return {...state, processing: true, pic:action.payload.pic };
    },
    
  },
  
  initialState
);

export default accountReducer;