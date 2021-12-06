import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Container} from '@material-ui/core/';

import { useStyles } from './styles';
import { ProtectedLayout } from '../../../../layouts';
import CatalogMenuContainer from '../../containers/CatalogMenuContainer';
import CatalogItemsContainer from '../../containers/CatalogItemsContainer';

const Catalog = (props) => {
  const classes = useStyles();
  const {handleSettings, handleNextPage} = props;

  return props.error ? (
    <Redirect to='/error' />
  ) : (
    <ProtectedLayout>
      <Container className={classes.paper}>
        <Container className={classes.container}>
          <CatalogMenuContainer handleSettings={handleSettings} />
          <CatalogItemsContainer handleNextPage={handleNextPage} />
        </Container>
      </Container>
    </ProtectedLayout>
  );
};

Catalog.propTypes = {
  error: PropTypes.string,
  handleSettings: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};

export default Catalog;
