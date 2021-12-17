import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CatalogMenu from '../views/CatalogMenu';


const CatalogMenuContainer = (props) => {
  const [state, setState] = useState({
    currentSearchInput: '',
    currentCategory: '',
    pressedButton: undefined,
    sortValues: {
      sort: 'title',
      order: 1,
    },
  })

  // state = {
  //   currentSearchInput: '',
  //   currentCategory: '',
  //   pressedButton: undefined,
  //   sortValues: {
  //     sort: 'title',
  //     order: 1,
  //   },
  // };

  const handleInput = (event) => {
    const value = event.target.value;
    if(value !== state.currentSearchInput) {
      props.handleSettings({search: value})
    };
    setState({ currentSearchInput: value });
  };

  // handleInput = event => {
  //   const value = event.target.value;

  //   if (value !== this.state.currentSearchInput) {
  //     this.props.handleSettings({ search: value });
  //   }

  //   this.setState({ currentSearchInput: value });
  // };

const handleChange = (event) => {
  setState(state => ({
    sortValues: {
      ...state.sortValues,
      [event.target.name] : event.target.value
    }
  }));
  props.handleSettings({ [event.target.name] : event.target.value});
}

  // handleChange = event => {
  //   this.setState(state => ({
  //     sortValues: {
  //       ...state.sortValues,
  //       [event.target.name]: event.target.value,
  //     },
  //   }));

  //   this.props.handleSettings({ [event.target.name]: event.target.value });
  // };

  // const handleClick = (nextCategory, index) => {
  //   state.pressedButton === index
  //       ? setState({ pressedButton: undefined })
  //       : setState({ pressedButton: index });

  //     if (state.currentCategory === nextCategory && state.pressedButton === index) {
  //       props.handleSettings({ category: '' });
  //       setState({ currentCategory: '' });
  //     } else {
  //       props.handleSettings({ category: nextCategory });
  //       setState({ currentCategory: nextCategory });
  //     }
  // }

  // handleClick = (nextCategory, index) => {
  //   this.state.pressedButton === index
  //     ? this.setState({ pressedButton: undefined })
  //     : this.setState({ pressedButton: index });

  //   if (this.state.currentCategory === nextCategory && this.state.pressedButton === index) {
  //     this.props.handleSettings({ category: '' });
  //     this.setState({ currentCategory: '' });
  //   } else {
  //     this.props.handleSettings({ category: nextCategory });
  //     this.setState({ currentCategory: nextCategory });
  //   }
  // };

  
    return (
      <CatalogMenu
        categories={props.categories.items}
        loading={props.categories.loading}
        sortValues={state.sortValues}
        pressedButton={state.pressedButton}
        handleInput={handleInput}
        handleChange={handleChange}
        // handleClick={handleClick}
      />
    );
  
}

const mapStateToProps = state => ({
  categories: state.catalog.categories,
});

CatalogMenuContainer.propTypes = {
  handleSettings: PropTypes.func,
};

export default connect(mapStateToProps)(CatalogMenuContainer);
