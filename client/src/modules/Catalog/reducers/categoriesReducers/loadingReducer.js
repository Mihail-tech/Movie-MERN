import { handleActions } from 'redux-actions';
import {getCategoriesRequested, getCategoriesSucceeded, getCategoriesFailed} from '../../actions';

const loadingReducer = handleActions(
  {
    [getCategoriesRequested]: (state, action) => true,
    [getCategoriesSucceeded]: (state, action) => false,
    [getCategoriesFailed]: (state, action) => false,
  },
  false
);

export default loadingReducer;
