import { gql } from 'react-apollo';

const currentUserQuery = gql`
  query currentUserQuery {
    currentUser {
      admin
      discordName
      email
      id
      uid
    }
  }
`;

export default currentUserQuery;
