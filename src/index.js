import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import store from './config/store';
import apolloClient from './config/apolloClient';
import { loginValidate } from './actions/auth';

import App from './App';

import 'typeface-roboto';
import './index.css';

// Validate current login if one exists
if (localStorage.getItem('X-USER-UID')) {
  store.dispatch(loginValidate());
}

ReactDOM.render(
  <ApolloProvider client={apolloClient} store={store}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
