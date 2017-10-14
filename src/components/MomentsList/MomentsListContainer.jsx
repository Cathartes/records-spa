import { graphql } from 'react-apollo';

import momentsListQuery from '../../queries/momentsListQuery';

import MomentsList from './MomentsList';

export default graphql(momentsListQuery, {
  options: props => ({
    variables: {
      recordBookId: props.recordBookId
    }
  })
})(MomentsList);
