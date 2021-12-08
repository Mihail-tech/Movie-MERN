import React, { useState } from 'react';
import { connect } from 'react-redux';

import Header from '../views';
import { unsetCurrentUser } from '../../Account/actions';
import { history } from '../../../redux/store';

const HeaderContainer = props => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    props.logoutUser();
    history.push('/login');
  };

  const handleMain = () => history.push('/catalog');

  return (
    <Header
      username={props.username}
      pic={props.pic}
      logOut={handleLogOut}
      handleMain={handleMain}
      handleClick={handleClick}
    />
  );
};

const mapStateToProps = state => ({
  username: state.account.username,
  pic: state.account.pic,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(unsetCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
