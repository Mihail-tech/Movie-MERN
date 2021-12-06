import React, { useState } from 'react';
import { connect } from 'react-redux';

import Setting from '../views';
import accountReducer from '../../Account/reducers';
import { history } from '../../../redux/store';
import { unsetCurrentUser } from '../../Account/actions';
import { avatarUpdateRequested } from '../action';

const SettingContainer = props => {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState(props.pic);

  // const submitHandler = (event) => {
  //     event.preventDefault();
  // };
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    name === 'username' && setUsername(value);
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  };

  // const handleSubmit = () => {
  //     props.updateUser();
  //     history.push("/");
  // };

  //   const updatePic = pic => {
  //     if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
  //       const file = e.target.files[0];
  //       const formData = new FormData();
  //       formData.append('file', file, file.name);
  //     }
  //   };
  const handleFileUpdate = (pic, e) => {
    // if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append('pic', file, file.name);

      props.updateAvatar(formData);

      e.target.files = null;
    // }
  };

  const handleUpdate = () => {
    props.updateUser({
      username,
      email,
      password,
    });
    history.push('/setting');
  };

  const profileProps = {
    username,
    email,
    password,
    pic: props.pic,
    handleUpdate,
    handleChange,
    handleFileUpdate,
    // updatePic,
  };

  return <Setting {...profileProps} settingErrors={props.settingErrors} />;
};

const mapStateToProps = state => ({
  username: state.account.username,
  email: state.account.email,
  password: state.account.password,
  pic: state.account.pic,
  settingErrors: state.setting.errors,
});

const mapDispatchToProps = dispatch => ({
  updateUser: () => dispatch(unsetCurrentUser()),
  updateAvatar: data => dispatch(avatarUpdateRequested(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
