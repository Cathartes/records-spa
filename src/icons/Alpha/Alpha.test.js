import React from 'react';
import ReactDOM from 'react-dom';

import AlphaIcon from './Alpha';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlphaIcon />, div);
});
