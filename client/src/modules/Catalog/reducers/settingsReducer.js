import { handleActions } from 'redux-actions';

const initialState = {
  page: 1,
  sort: 'title',
  order: 1,
}

const settingsReducer = handleActions(
  {
    CATALOG_SETTINGS_UPDATE: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);

export default settingsReducer;
