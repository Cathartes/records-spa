import { gql } from 'react-apollo';

export default gql`
  mutation DeleteMemberMutation($id: Int!) {
    deleteMember(id: $id) {
      discordName
      email
      id
      membershipType
      admin
      currentUserStatus
    }
  }
`;
