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

const Register = (props) => {
  const classes = useStyles();
  const {handleSubmit, usernameError, emailError, passwordError, confirmError, registerErrors } = props;
  return (
    <PublicLayout>
      <Container className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form id='registerForm' className={classes.form} onSubmit={handleSubmit} noValidate>
          <Field
            id='registerUsername'
            name='username'
            label='Username'
            error={!!usernameError}
            component={renderTextField}
          />
          {usernameError ? <Typography className={classes.fieldHint}>{usernameError}</Typography> : null}

          <Field
            type='email'
            id='registerEmail'
            name='email'
            label='Email'
            error={!!emailError}
            component={renderTextField}
          />
          {emailError ? <Typography className={classes.fieldHint}>{emailError}</Typography> : null}

          <Field
            type='password'
            id='registerPassword'
            name='password'
            label='Password'
            error={!!passwordError}
            component={renderTextField}
          />
          {passwordError ? <Typography className={classes.fieldHint}>{passwordError}</Typography> : null}

          <Field
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm password'
            error={!!confirmError}
            component={renderTextField}
          />
          {confirmError ? <Typography className={classes.fieldHint}>{confirmError}</Typography> : null}

          {registerErrors
            ? registerErrors.map((error, index) => (
                <Typography key={index} className={classes.formHint}>
                  {error}
                </Typography>
              ))
            : null}

          <Button type='submit' variant='contained' color='primary' fullWidth className={classes.submit}>
            Sign up
          </Button>

          <Grid container>
            <Grid item>
              <Link href='/login' variant='body2' className={classes.link}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </PublicLayout>
  );
};

const RegisterForm = reduxForm({
  form: 'registerForm',
})(Register);

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  usernameError: PropTypes.string,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  confirmError: PropTypes.string,
  registerErrors: PropTypes.array,
};

export default RegisterForm;
