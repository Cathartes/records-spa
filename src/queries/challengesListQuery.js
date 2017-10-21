import { gql } from 'react-apollo';

const challengesListQuery = gql`
  query challengesListQuery($recordBookId: ID!) {
    challenges(recordBookId: $recordBookId) {
      completions {
        user {
          discordName
        }
      }
      completionsCount
      id
      name
      maxCompletions
      pointsCompletion
      pointsFirst
      pointsSecond
      pointsThird
    }
  }
`;

export default challengesListQuery;
