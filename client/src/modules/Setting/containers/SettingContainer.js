import React, { useState } from 'react';
import { connect } from 'react-redux';

import Setting from '../views';
import { userUpdateRequested, avatarUpdateRequested } from '../action';
import {
  emailSettingSelector,
  picSelector,
  usernameSettingSelector,
  settingErrorsSelector,
} from '../../../redux/selectors';

const SettingContainer = props => {
  const { username, email } = props;

  const [pic, setPic] = useState(props.pic);

  const handleFileUpdate = e => {
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      setPic(reader.result);
      props.updateAvatar(reader);
    };
  };

  const handleUpdate = values => {
    const { username, email, pic } = values;
    props.updateUser({
      username,
      email,
      pic,
    });
  };

  const settingProps = {
    username,
    email,
    pic,
    handleUpdate,
    handleFileUpdate,
  };

  return <Setting {...settingProps} settingErrors={props.settingErrors} />;
};

const mapStateToProps = state => ({
  username: usernameSettingSelector(state),
  email: emailSettingSelector(state),
  pic: picSelector(state),
  settingErrors: settingErrorsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(userUpdateRequested(user)),
  updateAvatar: data => dispatch(avatarUpdateRequested(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
