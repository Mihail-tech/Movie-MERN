import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Avatar, Button, Card, CardContent, TextField, Typography, Container } from '@material-ui/core';
import FileBase64 from 'react-file-base64';

import { useStyles } from './style';
import { ProtectedLayout } from '../../../layouts';

const Setting = props => {
  const classes = useStyles();
  const {username, email, password, pic, handleChange, handleUpdate} = props;

  return (
    <ProtectedLayout>
      <div className={classes.block}>
        <Container className={classes.formBlock} >
          <Avatar className={classes.avatarPic} src={pic} alt="avatar" />
          <Formik
            initialValue={{
              username: username,
              email: email,
              password: password,
            }}>
            {({  handleBlur }) => (
              <form>
                <CardContent>
                  <Typography variant='h5'>Name</Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    name = 'username'
                    value={username}
                    onBlur={handleBlur('username')}
                    onChange={e => {
                    //   handleChange(e);
                      handleUpdate(e);
                    }}></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Email</Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    name='email'
                    value={email}
                    onBlur={handleBlur('email')}
                    onChange={e => {
                    //   handleChange(e);
                      handleChange(e);
                    }}></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Password</Typography>
                  <TextField type='password' variant='standard' name='password'
                    value={password}
                    onBlur={handleBlur('password')}
                    onChange={e => {
                    //   handleChange(e);
                      handleChange(e);
                    }}></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Confirm Password</Typography>
                  <TextField type='password' variant='standard'
                   ></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Change avatar</Typography>
                  <FileBase64 
                    id= "pic"
                    type = "file"
                    // multiple = {true}
                    onDone={props.handleFileUpdate}
                    ></FileBase64>
                </CardContent>
              </form>
            )}
          </Formik>
          <div className={classes.buttonBlock}>
            <Button type='submit' variant='contained' className={classes.updateButton} onClick={handleUpdate}>
              Update
            </Button>
          </div>
        </Container>
      </div>
    </ProtectedLayout>
  );
};

Setting.propTypes = {
    username: PropTypes.string ,
    email: PropTypes.string ,
    saveChange: PropTypes.func ,
    handleChange: PropTypes.func ,
    handleBlur: PropTypes.func
}

export default Setting;