import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import usersListQuery from '../../queries/usersListQuery';
import createUserMutation from '../../mutations/createUserMutation';

import UsersForm from '../../components/UsersForm';

class UsersAdd extends PureComponent {
  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
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
        submitText="Add"
        titleText="Add Member"
        {...this.props}
      />
    );
  }
}

UsersAdd.propTypes = {
  onRequestClose: PropTypes.func.isRequired
};

export default graphql(createUserMutation)(UsersAdd);
