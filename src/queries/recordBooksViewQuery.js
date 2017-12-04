import gql from 'graphql-tag';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: Int!) {
    recordBook(id: $recordBookId) {
      endTime
      id
      name
      published
      rushEndTime
      rushStartTime
      rushWeekActive
      startTime
      uid
    }
  }
`;

export default recordBooksViewQuery;
