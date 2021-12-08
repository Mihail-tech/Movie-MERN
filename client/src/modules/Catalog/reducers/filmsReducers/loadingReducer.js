import { handleActions } from 'redux-actions';
import {getFilmsRequested, getFilmsSucceeded, getFilmsFailed, cleanFilms } from '../../actions';

const loadingReducer = handleActions(
  {
    [getFilmsRequested]: (state, action) => true,
    [getFilmsSucceeded]: (state, action) => false,
    [getFilmsFailed]: (state, action) => false,
    [cleanFilms]: (state, action) => false,
  },
  false
);

export default loadingReducer;
