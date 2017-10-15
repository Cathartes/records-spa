import { gql } from 'react-apollo';

const createParticipationMutation = gql`
  mutation createParticipationMutation(
    $recordBookId: ID!
    $userId: ID!
    $teamId: ID
  ) {
    createParticipation(
      recordBookId: $recordBookId
      userId: $userId
      teamId: $teamId
    ) {
      id
    }
  }
`;

export default createParticipationMutation;
