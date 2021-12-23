import {handleActions} from 'redux-actions';
import {commentSucceeded, commentFailed, commentRequested, commentGetRequested, commentGetSucceeded, commentGetFailed} from '../../actions';

const initialState = []


const commentPost = handleActions({
    [commentRequested]: (state, action) => state,
    [commentSucceeded]: (state, action) => {
        console.log(action.payload, 'action.payload facking reducer')
        return action.payload
    },
    [commentFailed]: (state, action) => initialState,
    [commentGetRequested]: (state, action) => state,
    [commentGetSucceeded]: (state, action) =>{
        console.log(action.payload.comments, 'get facking reducer')
        return action.payload.comments
    },
    [commentGetFailed]: (state, action) =>state
},
initialState
);

export default commentPost;