import { compose, graphql } from 'react-apollo';
import { connect } from 'react-redux';

import createUserMutation from '../../mutations/createUserMutation';

import UsersAdd from './UsersAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default compose(graphql(createUserMutation), connect(mapStateToProps))(
  UsersAdd
);
