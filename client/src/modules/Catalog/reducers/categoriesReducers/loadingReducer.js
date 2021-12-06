import { handleActions } from 'redux-actions';

const loadingReducer = handleActions(
  {
    CATEGORIES_GET_REQUESTED: (state, action) => true,
    CATEGORIES_GET_SUCCEEDED: (state, action) => false,
    CATEGORIES_GET_FAILED: (state, action) => false,
  },
  false
);

export default loadingReducer;
