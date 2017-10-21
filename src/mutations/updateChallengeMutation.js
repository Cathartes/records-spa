import { gql } from 'react-apollo';

const updateChallengeMutation = gql`
  mutation updateChallengeMutation(
    $id: ID!
    $maxCompletions: Int
    $name: String
    $pointsCompletion: Int
    $pointsFirst: Int
    $pointsSecond: Int
    $pointsThird: Int
  ) {
    updateChallenge(
      id: $id
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

export default updateChallengeMutation;
