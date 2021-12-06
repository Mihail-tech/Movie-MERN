import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Link, Container} from '@material-ui/core/';

import { useStyles } from './styles';
import { PublicLayout } from '../../../layouts';

const Error = (props) => {
  const classes = useStyles();

  return (
    <PublicLayout>
      <Container className={classes.paper}>
        {props.message === 'Invalid token' ? (
          <Typography className={classes.error}>
            <Link href='/login'>Log in</Link> properly to observe this page
          </Typography>
        ) : (
          <Typography className={classes.error}>{props.message}</Typography>
        )}
      </Container>
    </PublicLayout>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
