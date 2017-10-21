import { graphql } from 'react-apollo';

import completionsListQuery from '../../queries/completionsListQuery';

import CompletionsList from './CompletionsList';

export default graphql(completionsListQuery, {
  options: props => ({
    variables: {
      recordBookId: props.recordBookId
    }
  })
})(CompletionsList);
