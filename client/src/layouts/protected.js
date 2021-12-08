import React from 'react';

import HeaderContainer from '../modules/Header/containers/HeaderContainer';

const ProtectedLayout = (props) => {
  return (
    <React.Fragment>
      <HeaderContainer />
      {props.children}
    </React.Fragment>
  );
};

export default ProtectedLayout;
