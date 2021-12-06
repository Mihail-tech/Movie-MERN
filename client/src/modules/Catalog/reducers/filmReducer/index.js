import {handleActions} from 'redux-actions';

// const initialState = {

// }


const filmReducer = handleActions (
    {
        FILM_GET_REQUESTED: (state, action) => state || [],
        FILM_GET_SUCCEEDED: (state, action) => (state ? [ ...action.payload] : action.payload),
        FILM_GET_FAILED: (state, action) => [],
    },
    []
);

export default filmReducer;