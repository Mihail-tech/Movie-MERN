import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import CurrentFilm from '../views/CurrentFilm';
import { getFilmRequested } from '../actions';
import {currentFilmSelector} from '../../../redux/selectors';

const CurrentFilmContainer = props => {
  const { getFilmRequested } = props;
  const { id } = useParams();

  useEffect(() => {
    getFilmRequested(id);
  }, [id]);

  return <CurrentFilm film={props.currentFilm} />;
};

const mapStateToProps = state => ({
  currentFilm: currentFilmSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getFilmRequested: id => dispatch(getFilmRequested(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFilmContainer);
