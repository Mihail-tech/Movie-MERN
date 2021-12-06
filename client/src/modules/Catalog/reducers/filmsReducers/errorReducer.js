import { handleActions } from 'redux-actions';

const errorReducer = handleActions(
  {
    FILMS_GET_FAILED: (state, action) => action.payload,
    FILMS_CLEAN: (state, action) => '',
  },
  ''
);

export default errorReducer;
