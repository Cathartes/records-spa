import { gql } from 'react-apollo';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: Int!) {
    recordBook(id: $recordBookId) {
      endTime
      id
      name
      published
      rushEndTime
      rushStartTime
      startTime
      uid
    }
  }
`;

export default recordBooksViewQuery;
