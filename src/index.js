import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './helpers/store';
import { loginValidate } from './actions/auth';

import App from './App';

import 'typeface-roboto';
import './index.css';

// Validate current login if one exists
if (localStorage.getItem('X-USER-UID')) {
  store.dispatch(loginValidate());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
