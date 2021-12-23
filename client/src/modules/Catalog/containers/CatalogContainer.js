import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import Catalog from '../views/Catalog';
import { getCategoriesRequested, getFilmsRequested, cleanFilms, updateCatalogSettings } from '../actions';
import {settingsSelector, categoriesErrorSelector, filmsErrorSelector} from '../../../redux/selectors';

const CatalogContainer = props => {
  const { updateSettings, cleanFilms, getCategories, getFilms, settings, filmsError, categoriesError } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    updateSettings({ page: currentPage + 1 });
  };

  const handleSettings = newSettings => {
    setCurrentPage({ currentPage: 1 });
    updateSettings({ page: 1, ...newSettings });
    cleanFilms();
  };

  const prevProps = useRef(settings);

  useEffect(() => {
    getCategories();
    getFilms(settings);
    if (prevProps.settings !== settings) {
      getFilms(settings);
    }
  });

  return (
    <Catalog error={categoriesError || filmsError} handleSettings={handleSettings} handleNextPage={handleNextPage} />
  );
};

const mapStateToProps = state => ({
  settings: settingsSelector(state),
  categoriesError: categoriesErrorSelector(state),
  filmsError: filmsErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesRequested()),
  getFilms: settings => dispatch(getFilmsRequested(settings)),
  updateSettings: settings => dispatch(updateCatalogSettings(settings)),
  cleanFilms: () => dispatch(cleanFilms()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogContainer);
