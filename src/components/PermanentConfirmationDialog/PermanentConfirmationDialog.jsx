import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';

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
