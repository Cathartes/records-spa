import { gql } from 'react-apollo';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: ID!) {
    moments(recordBookId: $recordBookId) {
      completion {
        points
        status
      }
      createdAt
      id
      momentType
      participation {
        team {
          name
        }
      }
      user {
        discordName
      }
    }
    recordBook(id: $recordBookId) {
      id
      name
    }
  }
`;

export default recordBooksViewQuery;
