import React, { useState } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../views';
import { registerUserRequested } from '../actions';
import validate from '../util/validate';
import { registerErrorsSelector } from '../../../redux/selectors';

const RegisterContainer = props => {
  const { registerUser, registerErrors } = props;

  const [state, setState] = useState({
    validation: {
      valid: false,
      errors: {},
    },
  });

  const handleSignUp = values => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    const confirmPassword = values.confirmPassword;

    setState({ validation: validate({ ...user, confirmPassword }) });
    if (state.validation.valid) {
      registerUser(user);
    }
  };

  return (
    <RegisterForm
      onSubmit={handleSignUp}
      usernameError={state.validation.errors.username}
      emailError={state.validation.errors.email}
      passwordError={state.validation.errors.password}
      confirmError={state.validation.errors.confirmPassword}
      registerErrors={registerErrors}
    />
  );
};

const mapStateToProps = state => ({
  registerErrors: registerErrorsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUserRequested(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
