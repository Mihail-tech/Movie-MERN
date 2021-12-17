import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import Comment from '../views/Comment';
import { commentRequested } from '../actions';

const CommentContainer = props => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState();

  const { id } = useParams();

  useEffect(() => {
    commentRequested(id);
  }, [id]);

  const handleComment = () => {
    const finalComment = `${comment}`;
    console.log(finalComment, 'comment output');
    props.commentRequested(finalComment);
    setComments(comments.concat(comment));
    setComment('')
  };

  return (
    <Comment
      username={props.username}
      pic={props.pic}
      comments={comments}
      comment={comment}
      setComment={setComment}
      handleComment={handleComment}
    />
  );
};

const mapStateToProps = state => ({
  username: state.account.username,
  pic: state.account.pic,
  commen: state.catalog.comment,
});

const mapDispatchToProps = dispatch => ({
  commentRequested: comment => dispatch(commentRequested(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
