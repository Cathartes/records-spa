import gql from 'graphql-tag';

const createCompletionMutation = gql`
  mutation createCompletionMutation(
    $challengeId: Int!
    $participationId: Int!
    $points: Int
    $rank: Int
    $status: CompletionStatus
  ) {
    createCompletion(
      challengeId: $challengeId
      participationId: $participationId
      points: $points
      rank: $rank
      status: $status
    ) {
      uid
    }
  }
`;

export default createCompletionMutation;
