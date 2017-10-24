import { gql } from 'react-apollo';

const updateParticipationMutation = gql`
  mutation updateParticipationMutation($id: Int!, $teamId: Int) {
    updateParticipation(id: $id, teamId: $teamId) {
      uid
    }
  }
`;

export default updateParticipationMutation;
