import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import CurrentFilm from '../views/CurrentFilm';
import { getFilmRequested, updateRatingRequest } from '../actions';
import {currentFilmSelector} from '../../../redux/selectors';

const CurrentFilmContainer = props => {
  const { getFilmRequested, currentFilm } = props;
  const { id } = useParams();

  useEffect(() => {
    getFilmRequested(id);
  }, [id]);

  const handleRatingChange =(e) => {
    console.log(e.target.value)
    updateRatingRequest({value:e.target.value, })
  }

  return <CurrentFilm film={currentFilm} handleRatingChange={handleRatingChange} />;
};

const mapStateToProps = state => ({
  currentFilm: currentFilmSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getFilmRequested: id => dispatch(getFilmRequested(id)),
  updateRatingRequest: rating => dispatch(updateRatingRequest(rating))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFilmContainer);
