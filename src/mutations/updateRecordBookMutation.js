import gql from 'graphql-tag';

const updateRecordBookMutation = gql`
  mutation updateRecordBookMutation(
    $id: Int!
    $name: String
    $published: Boolean
    $rushWeekActive: Boolean
    $startTime: String
    $endTime: String
    $rushStartTime: String
    $rushEndTime: String
  ) {
    updateRecordBook(
      id: $id
      name: $name
      published: $published
      rushWeekActive: $rushWeekActive
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
