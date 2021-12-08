import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux/store';
import RegisterContainer from './modules/Register/containers/RegisterContainer';
import LoginContainer from './modules/Login/containers/LoginContainer';
import CatalogContainer from './modules/Catalog/containers/CatalogContainer';
import ErrorContainer from './modules/Error/containers/ErrorContainer';
import SettingContainer from './modules/Setting/containers/SettingContainer';
import CurrentFilmContainer from './modules/Catalog/containers/CurrentFilmContainer';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/register' component={RegisterContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/catalog' component={CatalogContainer} />
        <Route path='/error' component={ErrorContainer} />
        <Route path='/setting' component={SettingContainer} />
        <Route path ='/films/:id' component={CurrentFilmContainer} />
        <Redirect to='/login' />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
