import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { Button, Typography, Avatar, TextField } from '@material-ui/core';

const Comment = props => {
  const classes = useStyles();
  const { pic, comments, comment, setComment, handleComment } = props;
  console.log(props.comments, 'view');
  return (
    <div>
      {comments.map((comment, index) => (
        <form>
          <div className={classes.comment}>
            {/* <Avatar src={pic} alt='avatar' className={classes.image} /> */}
            <Typography variant='h6' className={classes.username}>
              {comment.writer}:
            </Typography>
            <Typography className={classes.text} key={index}>
              {comment.content}
            </Typography>
          </div>
        </form>
      ))}
      <h4>Write your comment:</h4>
      <div>
        <TextField
          fullWidth
          variant='outlined'
          label='Comment'
          multiline
          value={comment}
          onChange={e => setComment(e.target.value)}
          maxLength='255'
        />
        <Button type='submit' className={classes.updateButton} disabled={!comment} onClick={handleComment}>
          Send
        </Button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  pic: PropTypes.string,
  comment: PropTypes.string,
  comments: PropTypes.array,
  handleComment: PropTypes.func,
};

export default Comment;
