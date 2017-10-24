import React from 'react';
import ReactDOM from 'react-dom';

import LoadingCircle from './LoadingCircle';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<LoadingCircle />, div);
});
