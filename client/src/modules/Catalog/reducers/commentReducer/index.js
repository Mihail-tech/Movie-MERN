import {handleActions} from 'redux-actions';

const initialState = {
    comment: []
}

const commentPost = handleActions({
    COMMENT_POST: (state, action) => ({
        ...state,
        comment: action.payload
    })
},
    initialState
)

export default commentPost;