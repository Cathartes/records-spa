import { gql } from 'react-apollo';

const createChallengeMutation = gql`
  mutation createChallengeMutation(
    $recordBookId: ID!
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
      id
    }
  }
`;

export default createChallengeMutation;
