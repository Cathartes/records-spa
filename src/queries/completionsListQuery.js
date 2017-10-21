import { gql } from 'react-apollo';

const completionsListQuery = gql`
  query completionsListQuery($recordBookId: ID!) {
    completions(recordBookId: $recordBookId) {
      challenge {
        name
      }
      createdAt
      id
      points
      rank
      status
      participation {
        team {
          name
        }
        user {
          discordName
        }
      }
    }
  }
`;

export default completionsListQuery;
