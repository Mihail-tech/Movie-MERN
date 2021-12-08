import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Catalog from '../views/Catalog';
import { getCategoriesRequested, getFilmsRequested, cleanFilms, updateCatalogSettings } from '../actions';

const CatalogContainer = props => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    props.updateSettings({ page: currentPage + 1 });
  };

  const handleSettings = newSettings => {
    setCurrentPage({ currentPage: 1 });
    props.updateSettings({ page: 1, ...newSettings });
    props.cleanFilms();
  };

  const prevProps = useRef(props.settings);

  useEffect(() => {
    props.getCategories();
    props.getFilms(props.settings);
    if (prevProps.settings !== props.settings) {
      props.getFilms(props.settings);
    }
  });

  return (
    <Catalog
      error={props.categoriesError || props.filmsError}
      handleSettings={handleSettings}
      handleNextPage={handleNextPage}
    />
  );
};

const mapStateToProps = state => ({
  settings: state.catalog.settings,
  categoriesError: state.catalog.categories.error,
  filmsError: state.catalog.films.error,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesRequested()),
  getFilms: settings => dispatch(getFilmsRequested(settings)),
  updateSettings: settings => dispatch(updateCatalogSettings(settings)),
  cleanFilms: () => dispatch(cleanFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
