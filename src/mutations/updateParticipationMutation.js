import gql from 'graphql-tag';

const updateParticipationMutation = gql`
  mutation updateParticipationMutation($id: Int!, $teamId: Int) {
    updateParticipation(id: $id, teamId: $teamId) {
      uid
    }
  }
`;

export default updateParticipationMutation;
