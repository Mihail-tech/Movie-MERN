import React from 'react';
import { connect } from 'react-redux';

import Error from '../views';

const HeaderContainer = (props) => {
    return <Error message={props.loadingError} />;
}

const mapStateToProps = state => ({
  loadingError: state.catalog.categories.error || state.catalog.films.error,
});

export default connect(mapStateToProps)(HeaderContainer);
