import { gql } from 'react-apollo';

const updateUserMutation = gql`
  mutation updateUserMutation(
    $id: ID!
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
      id
    }
  }
`;

export default updateUserMutation;
