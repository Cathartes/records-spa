import { gql } from 'react-apollo';

const updateUserMutation = gql`
  mutation updateUserMutation(
    $id: Int!
    $discordName: String
    $email: String
    $password: String
    $membershipType: UserMembershipTypeEnum
  ) {
    updateUser(
      id: $id
      discordName: $discordName
      email: $email
      password: $password
      membershipType: $membershipType
    ) {
      uid
    }
  }
`;

export default updateUserMutation;
