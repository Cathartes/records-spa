import React from 'react';
import ReactDOM from 'react-dom';

import BravoIcon from './Bravo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BravoIcon />, div);
});
