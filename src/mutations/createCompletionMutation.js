import { gql } from 'react-apollo';

const createCompletionMutation = gql`
  mutation createCompletionMutation(
    $challengeId: ID!
    $participationId: ID!
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
      id
    }
  }
`;

export default createCompletionMutation;
