import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducers';
import filmsReducer from './filmsReducers';
import settingsReducer from './settingsReducer';
import filmReducer from './filmReducer'
import commentReducer from './commentReducer';

export default combineReducers({
  settings: settingsReducer,
  categories: categoriesReducer,
  films: filmsReducer,
  film: filmReducer,
  comment: commentReducer
});
