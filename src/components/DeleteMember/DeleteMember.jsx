import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import Button from 'material-ui/Button';

import DeleteMemberMutation from './DeleteMemberMutation';
import PermanentConfirmationDialog from '../PermanentConfirmationDialog';

class DeleteMember extends PureComponent {
  state = {
    open: false
  };

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
        <PermanentConfirmationDialog
          open={open}
          handleOnClick={this.handleOnClick}
          submitMutation={this.submitMutation}
        />
      </div>
    );
  }
}

export default graphql(DeleteMemberMutation)(DeleteMember);
