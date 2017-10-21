import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import ChallengesListContainer from './ChallengesListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <ChallengesListContainer />
    </Provider>,
    div
  );
});
