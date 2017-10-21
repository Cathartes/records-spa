import { gql } from 'react-apollo';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: ID!) {
    participations(recordBookId: $recordBookId) {
      id
      membershipType
      team {
        name
      }
      user {
        discordName
        id
      }
    }
  }
`;

export default recordBooksViewQuery;
