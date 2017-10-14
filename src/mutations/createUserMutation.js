import { gql } from 'react-apollo';

const createUserMutation = gql`
  mutation createUserMutation(
    $discordName: String!
    $email: String
    $password: String
    $membershipType: UserMembershipTypeEnum
  ) {
    createUser(
      discordName: $discordName
      email: $email
      password: $password
      membershipType: $membershipType
    ) {
      id
      discordName
    }
  }
`;

export default createUserMutation;
