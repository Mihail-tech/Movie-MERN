import { handleActions } from 'redux-actions';

const hasMoreReducer = handleActions(
  {
    HAS_MORE_UPDATE: (state, action) => action.payload,
    FILMS_CLEAN: (state, action) => true,
  },
  true
);

export default hasMoreReducer;
