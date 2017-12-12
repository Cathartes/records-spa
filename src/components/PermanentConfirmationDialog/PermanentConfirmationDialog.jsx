import React, { PureComponent } from 'react';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

class PermanentConfirmationDialog extends PureComponent {
  render() {
    const { open, handleOnClick, submitMutation, title, subtitle } = this.props;

    return (
      <Dialog open={open} onRequestClose={() => handleOnClick(false)}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button raised onClick={() => submitMutation()}>
            Confirm
          </Button>
          <Button raised onClick={() => handleOnClick(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default PermanentConfirmationDialog;
