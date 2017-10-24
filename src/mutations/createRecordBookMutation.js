import { gql } from 'react-apollo';

const createRecordBookMutation = gql`
  mutation createRecordBookMutation(
    $name: String!
    $published: Boolean
    $startTime: String
    $endTime: String
    $rushStartTime: String
    $rushEndTime: String
  ) {
    createRecordBook(
      name: $name
      published: $published
      startTime: $startTime
      endTime: $endTime
      rushStartTime: $rushStartTime
      rushEndTime: $rushEndTime
    ) {
      uid
    }
  }
`;

export default createRecordBookMutation;
