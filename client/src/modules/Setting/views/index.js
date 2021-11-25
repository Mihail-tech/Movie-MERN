import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import Container from '@material-ui/core/Container';
import { Avatar, Button, Card, CardContent, TextField, Typography } from '@material-ui/core';
import { ProtectedLayout } from '../../../layouts';

const Setting = props => {
  const classes = useStyles();

  return (
    <ProtectedLayout>
      <div className={classes.block}>
        <Container className={classes.formBlock} >
          <Avatar className={classes.avatarProfile} />
          <Formik
            initialValue={{
              username: props.username,
              email: props.email,
            }}>
            {({ handleChange, handleBlur }) => (
              <form>
                <CardContent>
                  <Typography variant='h6'>Name</Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    label=' Your name'
                    value={props.username}
                    onBlur={handleBlur('username')}
                    onChange={e => {
                      handleChange(e);
                      props.handleChange(e);
                    }}></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h6'>Email</Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    label=' Email'
                    value={props.email}
                    onBlur={handleBlur('email')}
                    onChange={e => {
                      handleChange(e);
                      props.handleChange(e);
                    }}></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h6'>Password</Typography>
                  <TextField type='password' variant='standard' label=' Password'></TextField>
                </CardContent>
                <CardContent>
                  <Typography variant='h6'>Confirm Password</Typography>
                  <TextField type='password' variant='standard' label='Confirm Password'></TextField>
                </CardContent>
              </form>
            )}
          </Formik>
          <div className={classes.buttonBlock}>
            <Button type='submit' variant='contained' className={classes.updateButton} onClick={props.saveChanges}>
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