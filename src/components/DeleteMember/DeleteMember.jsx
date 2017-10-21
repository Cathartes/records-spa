import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import IconButton from 'material-ui/IconButton';
import { ListItemSecondaryAction } from 'material-ui/List';

import DeleteIcon from 'material-ui-icons/Delete';

import DeleteMemberMutation from './DeleteMemberMutation';

class DeleteMember extends PureComponent {
  handleOnClick = () => {
    const { refetch, mutate, id } = this.props;

    mutate({
      variables: { id: parseInt(id, 0) }
    }).then(({ data }) => {
      console.log('Hello');
      refetch();
    });
  };

  render() {
    return (
      <ListItemSecondaryAction>
        <IconButton
          color="primary"
          aria-label="Delete or archive member"
          onClick={() => this.handleOnClick()}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    );
  }
}

export default graphql(DeleteMemberMutation)(DeleteMember);
