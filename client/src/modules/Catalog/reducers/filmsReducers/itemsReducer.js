import { handleActions } from 'redux-actions';
import {getFilmsRequested, getFilmsSucceeded, cleanFilms } from '../../actions';

const itemsReducer = handleActions(
  {
    [getFilmsRequested]: (state, action) => state || [],
    [getFilmsSucceeded]: (state, action) => (state ? [...state, ...action.payload] : action.payload),
    [cleanFilms]: (state, action) => [],
  },
  []
);

export default itemsReducer;
