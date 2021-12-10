import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import Comment from '../views/Comment';
import {commentRequested} from '../actions'

const CommentContainer = (props) => {

    const [comments, setComments] = useState([1,2,2])
    const [comment, setComment] = useState('')

    const {id} = useParams();
    
    useEffect(() => {
        commentRequested(id);
      }, [id]);
    
    console.log(props) 

    const handleComment = (id) => {
        const finalComment = `${props.username}: ${comment}`;
        console.log(finalComment)
        props.commentRequested(finalComment, id
            // надо передать id вторым параметром
            )
    }

    console.log(props.com)

    return (
        <Comment 
            username={props.username}
            pic={props.pic}
            comments={comments}
            comment={comment}
            setComment={setComment}
            handleComment={handleComment}
        />
    )
};

const mapStateToProps = state => ({
    username: state.account.username,
    pic: state.account.pic,
    com: state.catalog.comment
});
  
  const mapDispatchToProps = dispatch => ({
    commentRequested: comment => dispatch(commentRequested(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps) (CommentContainer);