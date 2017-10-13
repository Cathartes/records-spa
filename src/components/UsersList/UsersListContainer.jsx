import { graphql } from 'react-apollo';

import usersListQuery from './usersListQuery';

import UsersList from './UsersList';

export default graphql(usersListQuery)(UsersList);
