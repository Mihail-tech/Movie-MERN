import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import Comment from '../views/Comment';
import { commentRequested, commentGetRequested } from '../actions';
import { currentFilmSelector, usernameSelector, commentsSelector, picSelector } from '../../../redux/selectors';

const CommentContainer = props => {
  const { username, commentGetRequested, commentRequested, comments, currentFilm } = props;

  const [comment, setComment] = useState('');

  const { id } = useParams();

  useEffect(() => {
    commentGetRequested(id);
  }, []);

  const handleComment = () => {
    const finalComment = { writer: username, content: comment, filmId: currentFilm._id , pic:props.pic};
    console.log(finalComment)
    commentRequested(finalComment);
    setComment('');
  };

  return (
    <Comment
      username={username}
      comment={comment}
      setComment={setComment}
      handleComment={handleComment}
      comments={comments}
      pic={props.pic}
    />
  );
};

const mapStateToProps = state => ({
  username: usernameSelector(state),
  comments: commentsSelector(state),
  currentFilm: currentFilmSelector(state),
  pic: picSelector(state),
});

const mapDispatchToProps = dispatch => ({
  commentRequested: comment => dispatch(commentRequested(comment)),
  commentGetRequested: id => dispatch(commentGetRequested(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
