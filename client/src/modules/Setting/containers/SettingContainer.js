import React, { useState } from 'react';
import { connect } from 'react-redux';

import Setting from '../views';
import accountReducer from '../../Account/reducers';
import { history } from '../../../redux/store';
import { unsetCurrentUser } from '../../Account/actions';
import { userUpdateRequested, avatarUpdateRequested } from '../action';

const SettingContainer = props => {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState(props.pic);
console.log(props)
  // const submitHandler = (event) => {
  //     event.preventDefault();
  // };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
console.log(value)
    name === 'username' && setUsername(value);
    name === 'email' && setEmail(value);
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
  const handleFileUpdate = (e) => {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append('file', file, file.name);

      console.log(formData)

      props.updateAvatar(formData);

      e.target.files = null;
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log('fucking code')
    props.updateUser({
      username,
      email,
      password,
    });
    
  };


  const profileProps = {
    username,
    email,
    password,
    pic,
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
  updateUser: (user) => dispatch(userUpdateRequested(user)),
  updateAvatar: data => dispatch(avatarUpdateRequested(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
