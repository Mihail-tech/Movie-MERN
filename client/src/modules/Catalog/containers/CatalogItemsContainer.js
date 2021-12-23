import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogItems from '../views/CatalogItems';
import {filmsSelector} from '../../../redux/selectors';

const CatalogItemsContainer = props => {
  const {films, handleNextPage} = props;
  
  return (
    <CatalogItems
      films={films.items}
      loading={films.loading}
      hasMore={films.hasMore}
      handleNextPage={handleNextPage}
    />
  );
};

const mapStateToProps = state => ({
  films: filmsSelector(state),
});

CatalogItemsContainer.propTypes = {
  handleNextPage: PropTypes.func,
};

export default connect(mapStateToProps)(CatalogItemsContainer);
