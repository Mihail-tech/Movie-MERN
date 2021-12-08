import React from 'react';
import { Typography, Divider, Container, CardContent, Card } from '@material-ui/core/';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import { ProtectedLayout } from '../../../../layouts';
import { ReactComponent as Star } from '../../../../static/images/star-solid.svg';
import Comment from '../Comment';

const CurrentFilm = ({ film }) => {
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
            {film.rating ? (
              <Typography className={classes.subtitle2}>
                <Star className={classes.star} />
                {film.rating}
              </Typography>
            ) : null}
            <Divider className={classes.divider} light />
            <Typography>
              <h3>Comments:</h3>
              <Comment />
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
  rating: PropTypes.number,
};

export default CurrentFilm;
