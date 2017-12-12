import gql from 'graphql-tag';

const destroyUserMutation = gql`
  mutation destroyUserMutation($id: Int!) {
    destroyUser(id: $id) {
      id
    }
  }
`;

export default destroyUserMutation;
