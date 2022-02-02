import React from 'react';
import { Typography, Divider, Container, CardContent, Card } from '@material-ui/core/';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from './styles';
import { ProtectedLayout } from '../../../../layouts';
import CommentContainer from '../../containers/CommentContainer';

const CurrentFilm = ({ film, handleRatingChange, rating, length, message }) => {
  const classes = useStyles();

  return (
    <ProtectedLayout>
      <Container className={classes.formBlock}>
        <Card className={classes.card}>
          <img className={classes.media} src={'http://localhost:3001/images/avatars/' + film._id + '.jpg'} alt='' />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{film.title}</Typography>
            <Typography className={classes.subtitle1}>{film.year}</Typography>
            <Typography className={classes.text}>{film.description}</Typography>

            {rating ? (
              <Typography className={classes.subtitle2}>
                <Rating name='simple-controlled' value={rating} precision={0.2} onChange={handleRatingChange} />
              </Typography>
            ) : null}
            <Typography>{message}</Typography>
            <span>Total voted: {length}</span>
            <Divider className={classes.divider} light />
            <Typography>
              <h3>Comments:</h3>
              <CommentContainer />
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </ProtectedLayout>
  );
};

CurrentFilm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
};

export default CurrentFilm;
