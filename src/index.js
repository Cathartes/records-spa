import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import appReducers from './reducers/index';

import 'typeface-roboto';
import './index.css';

const loggerMiddleware = createLogger();
let store = createStore(
  appReducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
