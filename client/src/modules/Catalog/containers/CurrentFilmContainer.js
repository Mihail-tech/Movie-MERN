import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import CurrentFilm from '../views/CurrentFilm';
import { getFilmRequested } from '../actions';

const CurrentFilmContainer = props => {
  const { getFilmRequested } = props;
  const { id } = useParams();

  useEffect(() => {
    getFilmRequested(id);
  }, [id]);

  return <CurrentFilm film={props.currentFilm} />;
};

const mapStateToProps = state => ({
  currentFilm: state.catalog.film,
});

const mapDispatchToProps = dispatch => ({
  getFilmRequested: id => dispatch(getFilmRequested(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFilmContainer);
