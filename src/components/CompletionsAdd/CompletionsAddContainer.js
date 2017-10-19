import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import createCompletionMutation from '../../mutations/createCompletionMutation';
import completionsAddQuery from '../../queries/completionsAddQuery';

import CompletionsAdd from './CompletionsAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default compose(
  graphql(completionsAddQuery, {
    options: props => ({
      variables: {
        recordBookId: props.match.params.recordBookId
      }
    })
  }),
  graphql(createCompletionMutation),
  connect(mapStateToProps)
)(CompletionsAdd);
