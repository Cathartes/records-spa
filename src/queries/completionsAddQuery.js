import { gql } from 'react-apollo';

const completionsAddQuery = gql`
  query completionsAddQuery($recordBookId: ID!) {
    challenges(recordBookId: $recordBookId) {
      id
      name
    }
    participations(recordBookId: $recordBookId) {
      id
      user {
        discordName
      }
    }
  }
`;

export default completionsAddQuery;
