import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import Comment from '../views/Comment';
import { commentRequested, commentGetRequested } from '../actions';
import {currentFilmSelector} from '../../../redux/selectors';

const CommentContainer = props => {
  const {username } = props;
  // const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const { id } = useParams();
  console.log(props.comments)

  useEffect(() => {
    // props.commentRequested(id);
    props.commentGetRequested(id)
  }, []);

  const handleComment = () => {
    // const finalComment = `${comment}`;
    const finalComment = {writer:username , content: comment , filmId: props.currentFilm._id }
    console.log(finalComment, 'comment output');
    props.commentRequested(finalComment);
    // setComments(comments.concat(comment));
    
    setComment('')
  };

  return (
    <Comment
      username={username}
      pic={props.pic}
      // comments={comments}
      comment={comment}
      setComment={setComment}
      handleComment={handleComment}
      comments={props.comments}
    />
  );
};

const mapStateToProps = state => ({
  username: state.account.username,
  pic: state.account.pic,
  comments: state.catalog.comment,
  currentFilm: currentFilmSelector(state)
});

const mapDispatchToProps = dispatch => ({
  commentRequested: comment => dispatch(commentRequested(comment)),
  commentGetRequested: (id) => dispatch(commentGetRequested(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
