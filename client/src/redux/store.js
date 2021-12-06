import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import RootSaga from './rootSaga';
import createRootReducer from './rootReducer';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeSetup =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account'],
};

const rootReducer = createRootReducer(history);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeSetup(applyMiddleware(routerMiddleware(history), sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(RootSaga);

export { history, store, persistor };
