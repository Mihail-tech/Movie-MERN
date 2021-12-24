import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogMenu from '../views/CatalogMenu';
import {categoriesSelector} from '../../../redux/selectors';

const CatalogMenuContainer = props => {
const {handleSettings, categories} = props;

  const [state, setState] = useState({
    currentSearchInput: '',
    sortValues: {
      sort: 'title',
      order: 1,
    },
  });

  const handleInput = event => {
    const value = event.target.value;
    if (value !== state.currentSearchInput) {
      handleSettings({ search: value });
    }
    setState({ currentSearchInput: value });
  };

  const handleChange = event => {
    setState(state => ({
      sortValues: {
        ...state.sortValues,
        [event.target.name]: event.target.value,
      },
    }));
    handleSettings({ [event.target.name]: event.target.value });
  };

  return (
    <CatalogMenu
      categories={categories.items}
      loading={categories.loading}
      sortValues={state.sortValues}
      handleInput={handleInput}
      handleChange={handleChange}
    />
  );
};

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
});

CatalogMenuContainer.propTypes = {
  handleSettings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CatalogMenuContainer);
