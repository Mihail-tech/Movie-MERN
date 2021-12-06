import React, {useState} from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Avatar, TextField } from '@material-ui/core';

import {commentPost} from '../actions';

const Comment = (props) => {
  const classes = useStyles();
  const [comments, setComments] = useState([1,2,3,4])
  const [comment, setComment] = useState('')
  const dispatch = useDispatch();
  const username = useSelector(state => state.account.username);
  const pic = useSelector(state => state.account.pic);

const handleComment = () => {
    const finalComment = `${username}: ${comment}`;
    dispatch(commentPost(finalComment,
        // надо передать id вторым параметром
        ))
}

//   console.log(id);
  return (
    <div>
      <div>
        <Avatar src={pic} alt='avatar' />
      </div>
      <div>
        <div>
          <Typography variant='h6'>{username}</Typography>
        </div>
      </div>
      <h4>Write your comment:</h4>
      {comments.map((c, i) => (
        <form >
            <div>
            {/* <h4>Write your comment:</h4> */}
            <Typography key={i} >
                comments {i}
             </Typography>
            </div>
        </form>
      ))}
      <div>
      <TextField value={props.comment} onChange={props.handleChange} maxLength='255' placeholder='write comment' />
      <TextField fullWidth  variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)}/>
      <Button type='submit' className={classes.updateButton} disabled={!comment} onClick={handleComment} >
                Send
            </Button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
};

export default Comment;
