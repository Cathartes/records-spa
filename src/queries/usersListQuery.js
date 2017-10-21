import { gql } from 'react-apollo';

const usersListQuery = gql`
  query usersListQuery($membershipType: UserMembershipTypeEnum) {
    users(membershipType: $membershipType) {
      discordName
      email
      id
      membershipType
    }
  }
`;

export default usersListQuery;
