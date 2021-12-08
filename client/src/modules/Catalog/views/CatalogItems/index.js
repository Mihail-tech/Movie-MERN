import React from 'react';
import PropTypes from 'prop-types';
import InfiniteLoader from 'react-infinite-loader';
import {
  Button,
  Typography,
  Divider,
  Container,
  CardMedia,
  CardContent,
  Card,
  Link
} from '@material-ui/core/';

import { useStyles } from './styles';
import { ReactComponent as Star } from '../../../../static/images/star-solid.svg';

const CatalogItems = props => {
  const classes = useStyles();
  const { loading, films, hasMore, handleNextPage } = props;
  return loading && !films ? (
    <Typography className={classes.loading}>Loading...</Typography>
  ) : (
    <Container className={classes.cardsContainer}>
      {films.map((film, index) => (
        <Card className={classes.card} key={index}>
          <CardMedia className={classes.media} image={'http://localhost:3001/images/avatars/' + film._id + '.jpg'} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{film.title}</Typography>
            <Typography className={classes.subtitle1}>{film.year}</Typography>
            <Typography className={classes.text}>{film.description}</Typography>
            <Divider className={classes.divider} light />
            {film.rating && (
              <Typography className={classes.subtitle2}>
                <Star className={classes.star} />
                {film.rating}
              </Typography>
            )}
            <Link href={`/films/${film._id}`} className={classes.button}>
              <Button >more</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
      {hasMore ? <InfiniteLoader onVisited={handleNextPage} /> : null}
    </Container>
  );
};

CatalogItems.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      year: PropTypes.number,
      rating: PropTypes.number,
      category: PropTypes.object,
    })
  ),
  loading: PropTypes.bool,
  hasMore: PropTypes.bool,
  handleNextPage: PropTypes.func,
};

export default CatalogItems;
