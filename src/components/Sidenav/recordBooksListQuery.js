import { gql } from 'react-apollo';

const recordBooksListQuery = gql`
  query recordBookListQuery {
    recordBooks {
      id
      name
    }
  }
`;

export default recordBooksListQuery;
