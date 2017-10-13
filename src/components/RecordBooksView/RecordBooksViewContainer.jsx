import { graphql } from 'react-apollo';

import recordBooksViewQuery from './recordBooksViewQuery';

import RecordBooksView from './RecordBooksView';

export default graphql(recordBooksViewQuery, {
  options: props => ({
    variables: {
      recordBookId: props.match.params.id
    }
  })
})(RecordBooksView);
