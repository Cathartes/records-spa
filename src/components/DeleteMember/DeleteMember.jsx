import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';

import CloseIcon from 'material-ui-icons/Close';

import destroyUserMutation from '../../mutations/destroyUserMutation';

import PermanentConfirmationDialog from '../PermanentConfirmationDialog';

class DeleteMember extends PureComponent {
  state = {
    open: false,
    snackbar: false
  };

  handleOnClick = bool => {
    this.setState({ open: bool });
  };

  handleRequestClose = bool => {
    this.setState({ snackbar: bool });
  };

  submitMutation = () => {
    const { user, mutate, refetch, closeDialog } = this.props;
    mutate({
      variables: { id: parseInt(user.id, 0) }
    })
      .then(({ data }) => {
        closeDialog();
        refetch();
      })
      .catch(() => {
        this.handleRequestClose(true);
      });
  };

  render() {
    const { user } = this.props;
    const { open, snackbar } = this.state;
    console.log(
      user.participations.length > 0,
      user.participations[0].completions.length > 0
    );
    return (
      <div>
        <Button
          raised
          onClick={() => this.handleOnClick(true)}
          disabled={
            user.participations.length > 0 &&
            user.participations[0].completions.length > 0
          }
        >
          Delete
        </Button>
        <PermanentConfirmationDialog
          title="Are you sure you want to delete member?"
          subtitle="This action can't be reverted."
          open={open}
          handleOnClick={this.handleOnClick}
          submitMutation={this.submitMutation}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={snackbar}
          autoHideDuration={6000}
          onRequestClose={() => this.handleRequestClose(false)}
          SnackbarContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id"> An error occured! </span>}
          action={[
            <Button
              key="undo"
              color="accent"
              dense
              onClick={() => this.handleRequestClose(false)}
            >
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleRequestClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default graphql(destroyUserMutation)(DeleteMember);
