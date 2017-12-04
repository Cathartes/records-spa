import gql from 'graphql-tag';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: Int!) {
    participations(recordBookId: $recordBookId) {
      id
      membershipType
      team {
        name
      }
      teamId
      uid
      user {
        discordName
        id
      }
    }
  }
`;

export default recordBooksViewQuery;
