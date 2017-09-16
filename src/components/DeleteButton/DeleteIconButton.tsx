import * as React from 'react';

import IconButton from 'material-ui/IconButton';

import DeleteIcon from 'material-ui-icons/Delete';

class DeleteButtonIcon extends React.PureComponent {
  render() {
    return (
      <IconButton>
        <DeleteIcon />
      </IconButton>
    );
  }
}

export default DeleteButtonIcon;
