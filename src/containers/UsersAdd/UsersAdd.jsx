import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import usersListQuery from '../../queries/usersListQuery';
import createUserMutation from '../../mutations/createUserMutation';

import UsersForm from '../../components/UsersForm';

class UsersAdd extends PureComponent {
  state = { successRedirect: false };

  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
          discordName: state.discordName,
          membershipType: state.membershipType
        },
        refetchQueries: [
          {
            query: usersListQuery,
            variables: { membershipType: state.membershipType }
          }
        ]
      })
      .then(({ data }) => {
        this.setState({ successRedirect: true });
      });
  };

  render() {
    const { currentUser } = this.props;
    const { successRedirect } = this.state;

    if (!currentUser || !currentUser.admin) {
      return <Redirect to="/" />;
    } else if (successRedirect) {
      return <Redirect to="/members" />;
    }

    return <UsersForm onFormSubmit={this.onFormSubmit} submitText="Add" />;
  }
}

const mapStateToProps = state => {
  return { currentUser: state.auth.currentUser };
};

export default compose(graphql(createUserMutation), connect(mapStateToProps))(
  UsersAdd
);
