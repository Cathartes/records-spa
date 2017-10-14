import { gql } from 'react-apollo';

const updateRecordBookMutation = gql`
  mutation updateRecordBookMutation(
    $id: ID!
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
      id
    }
  }
`;

export default updateRecordBookMutation;
