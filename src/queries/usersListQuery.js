import gql from 'graphql-tag';

const usersListQuery = gql`
  query usersListQuery($membershipType: UserMembershipTypeEnum) {
    users(membershipType: $membershipType) {
      discordName
      email
      id
      membershipType
      uid
      participations {
        id
        completions {
          id
          status
        }
      }
    }
  }
`;

export default usersListQuery;
