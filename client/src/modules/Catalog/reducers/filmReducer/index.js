import {handleActions} from 'redux-actions';
import {getFilmSucceeded, getFilmFailed, updateRatingRequest, updateRatingSuccess, updateRatingFail} from '../../actions'

const filmReducer = handleActions (
    {
        [getFilmSucceeded]: (state, action) => {
            console.log(action.payload, 'action.payload')
        return action.payload
        },
        [getFilmFailed]: (state, action) => [],
        [updateRatingSuccess]: (state, action) => {
            const ratings = action.payload.rating;
            console.log(action.payload, 'action.payload.rating')
            let rating = 0;
            if(ratings.length > 0) {
                rating = ratings.reduce((prev, curr)=> prev + curr) / ratings.length
            }
        }, 
        [updateRatingFail]: (state, action) => []
    },
    []
);

export default filmReducer;