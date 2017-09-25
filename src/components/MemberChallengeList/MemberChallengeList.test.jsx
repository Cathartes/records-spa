import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../helpers/storeTest';

import MemberChallengeList from './MemberChallengeList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MemberChallengeList />
    </Provider>,
    div
  );
});
