import {handleActions} from 'redux-actions';
import {commentSucceeded, commentFailed, commentRequested} from '../../actions';

const initialState = {
    content: []
}

const commentPost = handleActions({
    [commentRequested]: (state, action) => state,
    [commentSucceeded]: (state, action) => {
        console.log(action.payload, 'action.payload reducer')
        return action.payload
    },
    [commentFailed]: (state, action) => initialState
},
initialState
);

export default commentPost;