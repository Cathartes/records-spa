import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';

import DeleteMemberMutation from './DeleteMemberMutation';

class DeleteMember extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleOnClick = bool => {
    this.setState({ open: bool });
  };

  submitMutation = () => {
    const { user, mutate, refetch, closeDialog } = this.props;
    mutate({
      variables: { id: parseInt(user.id, 0) }
    }).then(({ data }) => {
      closeDialog();
      refetch();
    });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button raised onClick={() => this.handleOnClick(true)}>
          Delete
        </Button>
        <Dialog open={open} onRequestClose={() => this.handleOnClick(false)}>
          <DialogTitle>Are you sure you want to delete member?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This action can't be reverted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button raised onClick={() => this.submitMutation()}>
              Confirm
            </Button>
            <Button raised onClick={() => this.handleOnClick(false)}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default graphql(DeleteMemberMutation)(DeleteMember);
