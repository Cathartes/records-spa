import { gql } from 'react-apollo';

const recordBooksViewQuery = gql`
  query recordBooksViewQuery($recordBookId: ID!) {
    recordBook(id: $recordBookId) {
      endTime
      id
      name
      published
      rushEndTime
      rushStartTime
      startTime
    }
  }
`;

export default recordBooksViewQuery;
