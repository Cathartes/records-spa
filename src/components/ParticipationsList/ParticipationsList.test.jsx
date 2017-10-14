import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../config/store';

import ParticipationsList from './ParticipationsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    data: { loading: false, participations: [] },
    match: { params: {} }
  };

  ReactDOM.render(
    <Provider store={store}>
      <ParticipationsList {...props} />
    </Provider>,
    div
  );
});
