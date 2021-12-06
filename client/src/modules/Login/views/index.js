import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Typography, TextField, Link, Grid, Container, Button, Avatar} from '@material-ui/core/';

import { useStyles } from './styles';
import { PublicLayout } from '../../../layouts';

const renderTextField = ({ input, ...custom }) => {
  return <TextField variant='outlined' margin='normal' {...input} {...custom} required fullWidth />;
};

const Login = (props) => {
  const classes = useStyles();
  const {handleSubmit, usernameError, passwordError, loginErrors, } = props;
  return (
    <PublicLayout>
      <Container className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log in
        </Typography>
        <form id='loginForm' className={classes.form} onSubmit={handleSubmit} noValidate>
          <Field
            id='registerUsername'
            name='username'
            label='Username'
            error={!!usernameError}
            component={renderTextField}
          />
          {usernameError ? <Typography className={classes.fieldHint}>{usernameError}</Typography> : null}

          <Field
            type='password'
            id='registerPassword'
            name='password'
            label='Password'
            error={!!passwordError}
            component={renderTextField}
          />
          {passwordError ? <Typography className={classes.fieldHint}>{passwordError}</Typography> : null}

          {loginErrors
            ? loginErrors.map((error, index) => (
                <Typography key={index} className={classes.formHint}>
                  {error}
                </Typography>
              ))
            : null}

          <Button type='submit' variant='contained' color='primary' fullWidth className={classes.submit}>
            Log in
          </Button>

          <Grid container>
            <Grid item>
              <Link href='/register' variant='body2' className={classes.link}>
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </PublicLayout>
  );
};

const LoginForm = reduxForm({
  form: 'loginForm',
})(Login);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  usernameError: PropTypes.string,
  passwordError: PropTypes.string,
  loginErrors: PropTypes.array,
};

export default LoginForm;
