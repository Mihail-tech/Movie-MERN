import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import { Button, Typography, Avatar, TextField } from '@material-ui/core';
import { useParams } from 'react-router';

const Comment = props => {
  const classes = useStyles();
  const { pic, username, comments, comment, setComment, handleComment } = props;
console.log(props)
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
        <form>
          <div>
            <Typography key={i}>c {i}</Typography>
          </div>
        </form>
      ))}
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
