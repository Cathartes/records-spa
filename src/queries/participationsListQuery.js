import { gql } from 'react-apollo';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: ID!) {
    participations(recordBookId: $recordBookId) {
      id
      team {
        name
      }
      user {
        discordName
        id
        membershipType
      }
    }
  }
`;

export default recordBooksViewQuery;
