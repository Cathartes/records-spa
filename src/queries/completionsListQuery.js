import gql from 'graphql-tag';

const completionsListQuery = gql`
  query completionsListQuery($recordBookId: Int!) {
    challenges(recordBookId: $recordBookId) {
      id
      name
      uid
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
      uid
    }
    participations(recordBookId: $recordBookId) {
      id
      uid
      user {
        discordName
      }
    }
  }
`;

export default completionsListQuery;
