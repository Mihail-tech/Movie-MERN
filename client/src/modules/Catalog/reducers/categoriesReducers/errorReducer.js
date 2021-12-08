import { handleActions } from 'redux-actions';
import {getCategoriesFailed} from '../../actions';

const errorReducer = handleActions(
  {
    [getCategoriesFailed]: (state, action) => action.payload,
  },
  ''
);

export default errorReducer;
