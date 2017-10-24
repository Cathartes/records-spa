import { gql } from 'react-apollo';

export default gql`
  mutation destroyUserMutation($id: Int!) {
    destroyUser(id: $id) {
      discordName
      email
      id
      membershipType
      admin
      status
    }
  }
`;
