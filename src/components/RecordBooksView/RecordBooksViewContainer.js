import { compose, graphql } from 'react-apollo';

import updateRecordBookMutation from '../../mutations/updateRecordBookMutation';
import recordBooksViewQuery from '../../queries/recordBooksViewQuery';

import RecordBooksView from './RecordBooksView';

export default compose(
  graphql(recordBooksViewQuery, {
    options: props => ({
      variables: { recordBookId: parseInt(props.match.params.id, 10) }
    })
  }),
  graphql(updateRecordBookMutation)
)(RecordBooksView);
