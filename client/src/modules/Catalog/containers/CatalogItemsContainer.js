import React, { useState } from 'react';
import { connect } from 'react-redux';

import CatalogItems from '../views/CatalogItems';
import { filmsSelector } from '../../../redux/selectors';

const CatalogItemsContainer = props => {
  const { films, handleNextPage } = props;

  const [value, setValue] = useState('');

  const filteredItems = films.items.filter(film => {
    return film.title.toLowerCase().includes(value.toLowerCase());
  });
  
  return (
    <CatalogItems
      films={films.items}
      loading={films.loading}
      hasMore={films.hasMore}
      handleNextPage={handleNextPage}
      setValue={setValue}
      filteredItems={filteredItems}
    />
  );
};

const mapStateToProps = state => ({
  films: filmsSelector(state),
});

export default connect(mapStateToProps)(CatalogItemsContainer);
