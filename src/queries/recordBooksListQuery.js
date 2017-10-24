import { gql } from 'react-apollo';

const recordBooksListQuery = gql`
  query recordBookListQuery {
    recordBooks {
      id
      name
      uid
    }
  }
`;

export default recordBooksListQuery;
