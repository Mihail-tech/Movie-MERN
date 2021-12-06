import React, { PureComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../views';
import { loginUserRequested } from '../actions';
import validate from '../util/validate';
import { render } from 'react-dom';

class LoginContainer extends React.PureComponent {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [state, setState] = useState({
  //   validation: {
  //     valid: false,
  //     errors: {},
  //   },
  // })

  state = {
    validation: {
      valid: false,
      errors: {},
    },
  };

  //  const handleLogIn = (values) => {
  //    const user = {
  //      username: values.username,
  //      password: values.password,
  //    }
  //    setState({validation:validate(user)},
  //   //  ()=> {
  //   //    if(state.validation.valid) {
  //   //      props.loginUser(user)
  //   //    }
  //   //  }
  //    )
  //  }

  // useEffect((user) => {
  //   if(state.validation.valid) {
  //            props.loginUser(user)
  //          }
  // });

  handleLogIn = values => {
    const user = {
      username: values.username,
      password: values.password,
    };

    this.setState(
      {
        validation: validate(user),
      },
      () => {
        if (this.state.validation.valid) {
          this.props.loginUser(user);
        }
      }
    );
  };

  render = () => (
    <LoginForm
      onSubmit={this.handleLogIn}
      usernameError={this.state.validation.errors.username}
      passwordError={this.state.validation.errors.password}
      loginErrors={this.props.loginErrors}
    />
  );
}

const mapStateToProps = state => ({
  loginErrors: state.login.errors,
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUserRequested(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
