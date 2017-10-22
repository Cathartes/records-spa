import { gql } from 'react-apollo';

const updateRecordBookMutation = gql`
  mutation updateRecordBookMutation(
    $id: Int!
    $name: String
    $published: Boolean
    $startTime: String
    $endTime: String
    $rushStartTime: String
    $rushEndTime: String
  ) {
    updateRecordBook(
      id: $id
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

export default updateRecordBookMutation;
