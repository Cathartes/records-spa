import { gql } from 'react-apollo';

const currentUserQuery = gql`
  query currentUserQuery {
    currentUser {
      admin
      discordName
      email
      id
    }
  }
`;

export default currentUserQuery;
