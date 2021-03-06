import gql from 'graphql-tag';

const challengesListQuery = gql`
  query challengesListQuery($recordBookId: Int!) {
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
      uid
    }
  }
`;

export default challengesListQuery;
