import { handleActions } from 'redux-actions';

const itemsReducer = handleActions(
  {
    CATEGORIES_GET_SUCCEEDED: (state, action) => action.payload,
  },
  []
);

export default itemsReducer;
