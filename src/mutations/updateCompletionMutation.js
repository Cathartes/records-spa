import { gql } from 'react-apollo';

const updateCompletionMutation = gql`
  mutation updateCompletionMutation(
    $id: ID!
    $points: Int
    $rank: Int
    $status: CompletionStatus
  ) {
    updateCompletion(id: $id, points: $points, rank: $rank, status: $status) {
      id
    }
  }
`;

export default updateCompletionMutation;
