import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from "react-router";

import CatalogItems from '../views/CatalogItems';

const CatalogItemsContainer = (props) => {

  const history = useHistory();

  // const openfilmid = (_id) => {
  //   history.push(`${_id}`);
  // }

// console.log(props.films.items)
    return (
      <CatalogItems
        films={props.films.items}
        loading={props.films.loading}
        hasMore={props.films.hasMore}
        handleNextPage={props.handleNextPage}
      />
    );
}

const mapStateToProps = state => ({
  films: state.catalog.films,
});

CatalogItemsContainer.propTypes = {
  handleNextPage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CatalogItemsContainer);
