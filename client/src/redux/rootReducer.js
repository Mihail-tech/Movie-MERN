import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import registerReducer from '../modules/Register/reducers';
import loginReducer from '../modules/Login/reducers';
import accountReducer from '../modules/Account/reducers';
import catalogReducer from '../modules/Catalog/reducers';
import settingReducer from '../modules/Setting/reducers';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    register: registerReducer,
    login: loginReducer,
    account: accountReducer,
    catalog: catalogReducer,
    setting: settingReducer
  });

export default rootReducer;
