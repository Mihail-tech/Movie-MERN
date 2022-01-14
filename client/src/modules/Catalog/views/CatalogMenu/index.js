import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Select, MenuItem, InputLabel, FormControl, Container} from '@material-ui/core/';

import { useStyles } from './styles';

const CatalogMenu = (props) => {
  const classes = useStyles();
  const {loading, sortValues, handleChange  } = props;

  return loading ? (
    <Typography className={classes.loading}>Loading...</Typography>
  ) : (
    <Container className={classes.menuContainer}>
      <Container className={classes.menuSort}>
        <FormControl >
          <InputLabel htmlFor='sort'>Sort by</InputLabel>
          <Select
            value={sortValues.sort}
            onChange={handleChange}
            inputProps={{
              name: 'sort',
              id: 'sort',
            }}>
            <MenuItem value={'title'}>Title</MenuItem>
            <MenuItem value={'year'}>Year</MenuItem>
            <MenuItem value={'rating'}>Rating</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='order'>Order</InputLabel>
          <Select
            value={sortValues.order}
            onChange={handleChange}
            inputProps={{
              name: 'order',
              id: 'order',
            }}>
            <MenuItem value={1}>Ascending</MenuItem>
            <MenuItem value={-1}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Container>

      
        <Typography className={classes.title}>Categories</Typography>
        
      
    </Container>
  );
};

CatalogMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  sortValues: PropTypes.shape({
    sort: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CatalogMenu;
