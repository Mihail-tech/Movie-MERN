import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from '../views';
import { unsetCurrentUser } from '../../Account/actions';
import { history } from '../../../redux/store';
import {usernameSelector, picSelector} from '../../../redux/selectors';

const HeaderContainer = props => {
  const {logoutUser, pic, username} = props;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    logoutUser();
    history.push('/login');
  };

  const handleMain = () => history.push('/catalog');

  return (
    <Header
      username={username}
      pic={pic}
      logOut={handleLogOut}
      handleMain={handleMain}
      handleClick={handleClick}
    />
  );
};

const mapStateToProps = state => ({
  username: usernameSelector(state),
  pic: picSelector(state),
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(unsetCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
