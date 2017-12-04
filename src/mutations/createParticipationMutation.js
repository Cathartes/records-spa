import gql from 'graphql-tag';

const createParticipationMutation = gql`
  mutation createParticipationMutation(
    $recordBookId: Int!
    $userId: Int!
    $teamId: Int
  ) {
    createParticipation(
      recordBookId: $recordBookId
      userId: $userId
      teamId: $teamId
    ) {
      uid
    }
  }
`;

export default createParticipationMutation;
