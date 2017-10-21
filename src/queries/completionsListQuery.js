import { gql } from 'react-apollo';

const completionsListQuery = gql`
  query completionsListQuery($recordBookId: ID!) {
    challenges(recordBookId: $recordBookId) {
      id
      name
    }
    completions(recordBookId: $recordBookId) {
      challenge {
        name
      }
      challengeId
      createdAt
      id
      participationId
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
    participations(recordBookId: $recordBookId) {
      id
      user {
        discordName
      }
    }
  }
`;

export default completionsListQuery;
