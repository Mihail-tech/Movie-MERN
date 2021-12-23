import React, { useState } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../views';
import { loginUserRequested } from '../actions';
import validate from '../util/validate';
import { loginErrorsSelector } from '../../../redux/selectors';

const LoginContainer = props => {
  const {loginUser, loginErrors} = props;

  const [state, setState] = useState({
    validation: {
      valid: false,
      errors: {},
    },
  });

  const handleLogIn = (values) => {
    const user = {
      username: values.username,
      password: values.password,
    };
    setState({ validation: validate(user) });
    loginUser(user);
  };

  return (
    <LoginForm
      onSubmit={handleLogIn}
      usernameError={state.validation.errors.username}
      passwordError={state.validation.errors.password}
      loginErrors={loginErrors}
    />
  );
};

const mapStateToProps = state => ({
  loginErrors: loginErrorsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUserRequested(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
