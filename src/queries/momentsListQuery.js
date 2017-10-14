import { gql } from 'react-apollo';

const momentsListQuery = gql`
  query momentsListQuery($recordBookId: ID!) {
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
  }
`;

export default momentsListQuery;
