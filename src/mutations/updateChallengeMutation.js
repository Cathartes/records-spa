import gql from 'graphql-tag';

const updateChallengeMutation = gql`
  mutation updateChallengeMutation(
    $id: Int!
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
      uid
    }
  }
`;

export default updateChallengeMutation;
