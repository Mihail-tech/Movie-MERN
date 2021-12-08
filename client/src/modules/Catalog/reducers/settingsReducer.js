import { handleActions } from 'redux-actions';
import {updateCatalogSettings} from '../actions';

const initialState = {
  page: 1,
  sort: 'title',
  order: 1,
}

const settingsReducer = handleActions(
  {
    [updateCatalogSettings]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);

export default settingsReducer;
