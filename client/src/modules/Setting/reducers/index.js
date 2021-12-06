import { handleActions } from 'redux-actions';

const initialState = {
  processing: false,
  errors: []
}

const settingReducer = handleActions(
  {
    USER_UPDATE_REQUESTED: (state, action) => ({
      state,
      processing: true,
    }),
    USER_UPDATE_SUCCEEDED: (state, action) => ({
      processing: true, ...action.payload
    }),
    USER_UPDATE_FAILED: (state, action) => ({
      processing: false,
      errors: [...action.payload],
    }),
    AVATAR_UPDATE_REQUESTED: (state, action) => ({
      state,
      processing: true,
    }),
    AVATAR_UPDATE: (state, action) => ({
      processing: true, ...action.payload
    })
  },
  initialState
);

export default settingReducer;
