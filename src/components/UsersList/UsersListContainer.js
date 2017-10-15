import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import {
  usersListSelectReset,
  usersListSelectToggle
} from '../../actions/usersList';
import usersListQuery from '../../queries/usersListQuery';

import UsersList from './UsersList';

const mapStateToProps = state => {
  return { selectedUsers: state.usersList.selectedUsers };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSelected: () => {
      dispatch(usersListSelectReset());
    },
    toggleSelected: userId => {
      dispatch(usersListSelectToggle(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  graphql(usersListQuery)(UsersList)
);
