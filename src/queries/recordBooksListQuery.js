import gql from 'graphql-tag';

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
