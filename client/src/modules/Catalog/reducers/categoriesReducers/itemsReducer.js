import { handleActions } from 'redux-actions';
import {getCategoriesSucceeded} from '../../actions';

const itemsReducer = handleActions(
  {
    [getCategoriesSucceeded]: (state, action) => action.payload,
  },
  []
);

export default itemsReducer;
