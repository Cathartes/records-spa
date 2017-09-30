import React from 'react';
import ReactDOM from 'react-dom';

import MomentCompletionTableRow from './MomentCompletionTableRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MomentCompletionTableRow />, div);
});
