import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import ChallengesEdit from './ChallengesEdit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onRequestClose = () => {};
  const challenge = {};

  ReactDOM.render(
    <Provider store={store}>
      <ChallengesEdit onRequestClose={onRequestClose} challenge={challenge} />
    </Provider>,
    div
  );
});
