import React from 'react';
import { Button, TextField, Typography, Divider, Container, CardMedia, CardContent, Card} from '@material-ui/core/';

import { useStyles } from './styles';
import { ProtectedLayout } from '../../../../layouts';
import { ReactComponent as Star } from '../../../../static/images/star-solid.svg';
import Comment from '../../Comment';

const CurrentFilm = (props) => {
  const classes = useStyles();

//   console.log(props.film)
  
  return (
    <ProtectedLayout>
      <Container className={classes.formBlock}>
        {/* {props.films.map((film, index) => ( */}
          <Card className={classes.card} 
        //   key={index}
          >
          <div>foto</div>
            {/* <CardMedia className={classes.media} image={'http://localhost:3001/images/avatars/' + film._id + '.jpg'} /> */}
            <CardContent className={classes.content}>
              <Typography className={classes.title}>
              {/* {film.title} */}
              title
              </Typography>
              <Typography className={classes.subtitle1}>
              {/* {film.year} */}
              year
              </Typography>
              <Typography className={classes.text}>
              {/* {film.description} */}
              description
              </Typography>
              <Divider className={classes.divider} light />
              {/* {film.rating ? ( */}
              <Typography className={classes.subtitle2}>
                <Star className={classes.star} />
                {/* {film.rating} */}
                rating
              </Typography>
              {/* } */}
              <Typography>
                  <h3>Comments:</h3>
                        <Comment />
              </Typography>
             
            </CardContent>
          </Card>
        {/* ))} */}
      </Container>
      <div>film</div>
    </ProtectedLayout>
  );
};

export default CurrentFilm;
