import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import appReducers from '../reducers/index';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
} else if (process.env.NODE_ENV === 'test') {
  require('./localStorageTest');
}

export default createStore(appReducers, applyMiddleware(...middlewares));
