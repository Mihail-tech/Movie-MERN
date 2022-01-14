import {handleActions} from 'redux-actions';
import {commentSucceeded, commentFailed, commentGetRequested, commentGetSucceeded, commentGetFailed} from '../../actions';

const initialState = []


const commentPost = handleActions({
    [commentSucceeded]: (state, action) => {    
        return [ ...state, action.payload.comment]
    },
    [commentFailed]: (state, action) => initialState,
    [commentGetRequested]: (state, action) => state,
    [commentGetSucceeded]: (state, action) =>{
        return action.payload.comments
    },
    [commentGetFailed]: (state, action) =>state
},
initialState
);

export default commentPost;