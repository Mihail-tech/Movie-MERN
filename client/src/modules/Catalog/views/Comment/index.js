import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { Button, Typography, Avatar, TextField } from '@material-ui/core';

const Comment = props => {
  const classes = useStyles();
  const { pic, username, comments, comment, setComment, handleComment } = props;
  console.log(props);
  return (
    <div>
      {comments.map((com, i) => (
        <form>
          <div className={classes.comment}>
            <Avatar src={pic} alt='avatar' className={classes.image} />
            <Typography variant='h6' className={classes.username}>
              {username}:
            </Typography>
            <Typography className={classes.text} key={i}>
              {com}
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
  username: PropTypes.string,
  handleComment: PropTypes.func,
};

export default Comment;
