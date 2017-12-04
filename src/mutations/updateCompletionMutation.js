import gql from 'graphql-tag';

const updateCompletionMutation = gql`
  mutation updateCompletionMutation(
    $id: Int!
    $points: Int
    $rank: Int
    $status: CompletionStatus
  ) {
    updateCompletion(id: $id, points: $points, rank: $rank, status: $status) {
      uid
    }
  }
`;

export default updateCompletionMutation;
