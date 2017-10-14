import { gql } from 'react-apollo';

const usersListQuery = gql`
  query usersListQuery {
    users {
      discordName
      email
      id
    }
  }
`;

export default usersListQuery;
