import { handleActions } from 'redux-actions';

const loadingReducer = handleActions(
  {
    FILMS_GET_REQUESTED: (state, action) => true,
    FILMS_GET_SUCCEEDED: (state, action) => false,
    FILMS_GET_FAILED: (state, action) => false,
    FILMS_CLEAN: (state, action) => false,
  },
  false
);

export default loadingReducer;
