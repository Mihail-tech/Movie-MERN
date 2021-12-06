import React from 'react';
import PropTypes from 'prop-types';
import {InputLabel, Select, Toolbar, Button, AppBar} from '@material-ui/core/'

import { useStyles } from './styles';
import logo from '../../../static/images/favicon-196.png';

const Header = (props) => {
  const classes = useStyles();
  const {handleMain, pic, username, logOut, handleClick} = props;

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
      <InputLabel className={classes.logo} onClick={handleMain}>
        <img src={logo} alt={logo} className={classes.logo}/>
      </InputLabel>
        <InputLabel > 
          <img className={classes.avatar} src={pic} alt="avatar" />
          {username}
        </InputLabel>
        <Select>
          <Button className={classes.button} onClick={logOut}>
            Logout
          </Button>
          <Button className={classes.button} href="/setting" > 
            Settings
          </Button>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  username: PropTypes.string,
  logOut: PropTypes.func.isRequired,
};

export default Header;
