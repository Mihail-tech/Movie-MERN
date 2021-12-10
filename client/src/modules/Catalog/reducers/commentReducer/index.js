import {handleActions} from 'redux-actions';
import {commentSucceeded, commentFailed, commentRequested} from '../../actions';

const initialState = {
    content: ''
}

const commentPost = handleActions({
    [commentRequested]: (state, action) => state,
    [commentSucceeded]: (state, action) => {
        return action.payload
    },
    [commentFailed]: (state, action) => []
},
[]
);

export default commentPost;