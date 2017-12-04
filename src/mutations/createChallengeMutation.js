import gql from 'graphql-tag';

const createChallengeMutation = gql`
  mutation createChallengeMutation(
    $recordBookId: Int!
    $maxCompletions: Int!
    $name: String!
    $pointsCompletion: Int!
    $pointsFirst: Int
    $pointsSecond: Int
    $pointsThird: Int
  ) {
    createChallenge(
      recordBookId: $recordBookId
      maxCompletions: $maxCompletions
      name: $name
      pointsCompletion: $pointsCompletion
      pointsFirst: $pointsFirst
      pointsSecond: $pointsSecond
      pointsThird: $pointsThird
    ) {
      uid
    }
  }
`;

export default createChallengeMutation;
