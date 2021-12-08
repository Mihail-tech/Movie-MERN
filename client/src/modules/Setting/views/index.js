import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Avatar, Button, CardContent, TextField, Typography, Container } from '@material-ui/core';


import { useStyles } from './style';
import { ProtectedLayout } from '../../../layouts';

const Setting = props => {
  const classes = useStyles();
  const {username, email, password, pic, handleChange, handleUpdate, handleFileUpdate} = props;

  return (
    <ProtectedLayout>
      <div className={classes.block}>
        <Container className={classes.formBlock} >
          <Avatar className={classes.avatarPic} src={pic} alt="avatar" />
          <Formik
            onSubmit={handleUpdate}
            initialValue={{
              username: username,
              email: email,
              password: password,
            }}>
            {({  handleBlur, handleUpdate }) => (
              <form onSubmit={handleUpdate}>
                <CardContent>
                  <Typography variant='h5'>Name  </Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    name = 'username'
                    label={username}
                    // value={username}
                    onBlur={handleBlur('username')}
                    // onChange={e => {
                    // //   handleChange(e);
                    //   handleUpdate(e);
                    // }}
                    >
                    </TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Email</Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    name='email'
                    label={email}
                    // value={email}
                    onBlur={handleBlur('email')}
                    // onChange={e => {
                    // //   handleChange(e);
                    //   handleChange(e);
                    // }}
                    ></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Password</Typography>
                  <TextField type='password' variant='standard' name='password'
                    // value={password}
                    onBlur={handleBlur('password')}
                    // onChange={e => {
                    // //   handleChange(e);
                    //   handleChange(e);
                    // }}
                    ></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Confirm Password</Typography>
                  <TextField type='password' variant='standard' name='password'
                   ></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Change avatar</Typography>
                  <input 
                    id= "pic"
                    type = "file"
                    accept="image/*"
                    onChange={handleFileUpdate}
                    ></input>
                </CardContent>
                <div className={classes.buttonBlock}>
            <Button type='submit' variant='contained' className={classes.updateButton}>
              Update
            </Button>
          </div>
              </form>
            )}
          </Formik>
        </Container>
      </div>
    </ProtectedLayout>
  );
};

Setting.propTypes = {
    username: PropTypes.string ,
    email: PropTypes.string ,
    // saveChange: PropTypes.func ,
    // handleChange: PropTypes.func ,
    handleUpdate: PropTypes.func,
    handleBlur: PropTypes.func,
    handleFileUpdate: PropTypes.func,
}

export default Setting;