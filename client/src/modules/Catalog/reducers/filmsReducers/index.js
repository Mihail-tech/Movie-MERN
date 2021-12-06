import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import itemsReducer from './itemsReducer';
import errorReducer from './errorReducer';
import hasMoreReducer from './hasMoreReducer';

export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  items: itemsReducer,
  hasMore: hasMoreReducer,
});
