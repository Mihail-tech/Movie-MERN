import { handleActions } from 'redux-actions';
import {
  commentSucceeded,
  commentFailed,
  commentGetRequested,
  commentGetSucceeded,
  commentGetFailed,
} from '../../actions';

const initialState = [];

const commentPost = handleActions(
  {
    [commentSucceeded]: (state, action) => {
      return [...state, action.payload.comment];
    },
    [commentFailed]: (state, action) => initialState,
    [commentGetRequested]: (state, action) => state,
    [commentGetSucceeded]: (state, action) => {
      const comments = action.payload.comments;
      const picture = action.payload.picture;
      const arr = picture.map(function(element) {
        return {
          id: element._id,
          pic: element.pic,
          writer: element.username,
        };
      });

      let comment = comments.map((item, i) => {
        const writer = arr.filter(el => el.writer === item.writer)[0];
        return { ...item, pic: writer.pic };
      });

      return comment;
    },
    [commentGetFailed]: (state, action) => state,
  },
  initialState
);

export default commentPost;
