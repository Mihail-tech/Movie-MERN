import React, { useState } from 'react';
import { connect } from 'react-redux';

import Setting from '../views';
import { userUpdateRequested, avatarUpdateRequested } from '../action';
import {passwordSelector, emailSelector, picSelector, usernameSelector, settingErrorsSelector} from '../../../redux/selectors';

const SettingContainer = props => {
  const [username, setUsername] = useState(props.username);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  // const [confirmPassword, setConfirmPassword] = useState('');
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

 
  const handleFileUpdate = (e) => {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append('file', file, file.name);

      console.log(formData)

      props.updateAvatar(formData);

      e.target.files = null;
  };

  const handleUpdate = () => {
    // event.preventDefault();
    console.log('fucking code')
    props.updateUser({
      username,
      email,
      // password,
      pic
    });
    
  };


  const settingProps = {
    username,
    email,
    // password,
    pic,
    handleUpdate,
    handleChange,
    handleFileUpdate,
    // updatePic,
  };

  return <Setting {...settingProps} settingErrors={props.settingErrors} />;
};

const mapStateToProps = state => ({
  username: usernameSelector(state),
  email: emailSelector(state),
  // password: passwordSelector(state),
  pic: picSelector(state),
  settingErrors: settingErrorsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(userUpdateRequested(user)),
  updateAvatar: (data) => dispatch(avatarUpdateRequested(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
