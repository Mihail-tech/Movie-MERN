import React from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { Avatar, Button, CardContent, TextField, Typography, Container } from '@material-ui/core';

import { useStyles } from './style';
import { ProtectedLayout } from '../../../layouts';
import validationSettingSchema from '../util/validate';

const Setting = props => {
  const classes = useStyles();
  const { username, email, pic, handleUpdate, handleFileUpdate } = props;

  return (
    <ProtectedLayout>
      <div className={classes.block}>
        <Container className={classes.formBlock}>
          <Avatar className={classes.avatarPic} src={pic} alt='avatar' />
          <Formik
          validationSchema= {validationSettingSchema}
            onSubmit={handleUpdate}
            initialValues={{
              username: username,
              email: email,
              pic: pic,
            }}>
            {({ handleBlur, handleSubmit, handleChange, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <CardContent>
                  <Typography variant='h5'>Name </Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    name='username'
                    label={username}
                    value={props?.values?.username}
                    onBlur={handleBlur('username')}
                    onChange={handleChange}></TextField>
                    {errors.username && touched.username && <div className={classes.errorMessage}>{errors.username}</div>}
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Email</Typography>
                  <TextField
                    type='text'
                    variant='standard'
                    name='email'
                    label={email}
                    value={props?.values?.email}
                    onBlur={handleBlur('email')}
                    onChange={handleChange}></TextField>
                     {errors.email && touched.email && <div className={classes.errorMessage}>{errors.email}</div>}
                </CardContent>
                <CardContent>
                  <Typography variant='h5'>Change avatar</Typography>
                  <input 
                    id='pic' 
                    type='file' 
                    name='file' 
                    accept='image/*' 
                    onChange={e => handleFileUpdate(e)}>
                  </input>
                </CardContent>
                <div className={classes.buttonBlock}>
                  <Button type='submit' variant='contained' className={classes.updateButton}>
                    Update
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </ProtectedLayout>
  );
};

Setting.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  handleChange: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFileUpdate: PropTypes.func,
};

export default Setting;
