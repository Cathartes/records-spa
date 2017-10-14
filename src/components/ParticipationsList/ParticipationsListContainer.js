import { graphql } from 'react-apollo';

import participationsListQuery from '../../queries/participationsListQuery';

import ParticipationsList from './ParticipationsList';

export default graphql(participationsListQuery, {
  options: props => ({
    variables: {
      recordBookId: props.recordBookId
    }
  })
})(ParticipationsList);
