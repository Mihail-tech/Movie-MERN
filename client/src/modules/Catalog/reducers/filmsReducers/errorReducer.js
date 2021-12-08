import { handleActions } from 'redux-actions';
import {getFilmsFailed, cleanFilms} from '../../actions';

const errorReducer = handleActions(
  {
    [getFilmsFailed]: (state, action) => action.payload,
    [cleanFilms]: (state, action) => '',
  },
  ''
);

export default errorReducer;
