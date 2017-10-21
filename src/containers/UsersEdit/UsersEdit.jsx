import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import usersListQuery from '../../queries/usersListQuery';
import updateUserMutation from '../../mutations/updateUserMutation';

import UsersForm from '../../components/UsersForm';

class UsersEdit extends PureComponent {
  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
          id: this.props.user.id,
          discordName: state.discordName,
          membershipType: state.membershipType
        },
        refetchQueries: [{ query: usersListQuery }]
      })
      .then(({ data }) => {
        this.props.onRequestClose();
      });
  };

  render() {
    return (
      <UsersForm
        onFormSubmit={this.onFormSubmit}
        submitText="Update"
        titleText="Update Member"
        {...this.props}
      />
    );
  }
}

UsersEdit.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default graphql(updateUserMutation)(UsersEdit);
