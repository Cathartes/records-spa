import gql from 'graphql-tag';

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
      uid
    }
  }
`;

export default createUserMutation;
