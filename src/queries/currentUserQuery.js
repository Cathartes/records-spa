import gql from 'graphql-tag';

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
