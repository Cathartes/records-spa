import gql from 'graphql-tag';

const completionsAddQuery = gql`
  query completionsAddQuery($recordBookId: Int!) {
    challenges(recordBookId: $recordBookId) {
      id
      name
      uid
    }
    participations(recordBookId: $recordBookId) {
      id
      user {
        discordName
      }
      uid
    }
  }
`;

export default completionsAddQuery;
