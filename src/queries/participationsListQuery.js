import { gql } from 'react-apollo';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: Int!) {
    participations(recordBookId: $recordBookId) {
      id
      membershipType
      team {
        name
      }
      uid
      user {
        discordName
        id
      }
    }
  }
`;

export default recordBooksViewQuery;
