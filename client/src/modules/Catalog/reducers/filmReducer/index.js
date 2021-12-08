import {handleActions} from 'redux-actions';
import {getFilmSucceeded, getFilmFailed} from '../../actions'

const filmReducer = handleActions (
    {
        [getFilmSucceeded]: (state, action) => {
        return action.payload
        },
        [getFilmFailed]: (state, action) => [],
    },
    []
);

export default filmReducer;