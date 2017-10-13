import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import store from './config/store';
import apolloClient from './config/apolloClient';

import App from './components/App';

import 'typeface-roboto';
import './index.css';

ReactDOM.render(
  <ApolloProvider client={apolloClient} store={store}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
