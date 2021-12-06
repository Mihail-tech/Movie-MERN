import { handleActions } from 'redux-actions';

const errorReducer = handleActions(
  {
    CATEGORIES_GET_FAILED: (state, action) => action.payload,
  },
  ''
);

export default errorReducer;
