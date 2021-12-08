import { handleActions } from 'redux-actions';
import {updateHasMore, cleanFilms} from '../../actions';

const hasMoreReducer = handleActions(
  {
    [updateHasMore]: (state, action) => action.payload,
    [cleanFilms]: (state, action) => true,
  },
  true
);

export default hasMoreReducer;
