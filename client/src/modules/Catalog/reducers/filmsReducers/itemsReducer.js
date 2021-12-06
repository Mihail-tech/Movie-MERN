import { handleActions } from 'redux-actions';

const itemsReducer = handleActions(
  {
    FILMS_GET_REQUESTED: (state, action) => state || [],
    FILMS_GET_SUCCEEDED: (state, action) => (state ? [...state, ...action.payload] : action.payload),
    FILMS_CLEAN: (state, action) => [],
  },
  []
);

export default itemsReducer;
