import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import CurrentFilm from '../views/CurrentFilm';
import { getFilmRequested, updateRatingRequest, updateRatingGetRequest } from '../actions';
import {currentFilmSelector, usernameSelector, ratingSelector, messageSelector} from '../../../redux/selectors';

const CurrentFilmContainer = props => {
  const { getFilmRequested, currentFilm, rating, updateRatingGetRequest, updateRatingRequest, username, message } = props;
  const { id } = useParams();
  useEffect(() => {
    getFilmRequested(id);
    updateRatingGetRequest(id)
  }, []);



  const handleRatingChange =(e) => {
    const finalRating ={user: username, rating:e.target.value, filmId: currentFilm._id}
     updateRatingRequest(finalRating)
     updateRatingGetRequest(id);
  }

  return <CurrentFilm film={currentFilm} handleRatingChange={handleRatingChange} rating={rating} length={currentFilm.length} message={message} />;
};

const mapStateToProps = state => ({
  currentFilm: currentFilmSelector(state),
  username: usernameSelector(state),
  rating: ratingSelector(state), 
  message: messageSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getFilmRequested: id => dispatch(getFilmRequested(id)),
  updateRatingRequest: rating => dispatch(updateRatingRequest(rating)),
  updateRatingGetRequest: id => dispatch(updateRatingGetRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFilmContainer);
