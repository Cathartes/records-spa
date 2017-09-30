import React from 'react';
import ReactDOM from 'react-dom';

import MomentNewMemberTableRow from './MomentNewMemberTableRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MomentNewMemberTableRow />, div);
});
