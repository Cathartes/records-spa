import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import ChallengesAdd from './ChallengesAdd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onRequestClose = () => {};

  ReactDOM.render(
    <Provider store={store}>
      <ChallengesAdd onRequestClose={onRequestClose} />
    </Provider>,
    div
  );
});
