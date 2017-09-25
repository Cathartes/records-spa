import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import appReducers from '../reducers/index';

const loggerMiddleware = createLogger();
export default createStore(
  appReducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
