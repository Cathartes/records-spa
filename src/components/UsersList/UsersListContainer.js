import { graphql } from 'react-apollo';

import usersListQuery from '../../queries/usersListQuery';

import UsersList from './UsersList';

export default graphql(usersListQuery)(UsersList);
