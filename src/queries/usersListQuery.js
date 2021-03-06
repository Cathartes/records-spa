import gql from 'graphql-tag';

const usersListQuery = gql`
  query usersListQuery($membershipType: UserMembershipTypeEnum) {
    users(membershipType: $membershipType) {
      discordName
      email
      id
      membershipType
      uid
    }
  }
`;

export default usersListQuery;
