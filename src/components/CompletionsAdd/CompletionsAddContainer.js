import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

import createCompletionMutation from '../../mutations/createCompletionMutation';
import completionsAddQuery from '../../queries/completionsAddQuery';

import CompletionsAdd from './CompletionsAdd';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(
  graphql(completionsAddQuery, {
    options: props => ({
      variables: {
        recordBookId: props.match.params.recordBookId
      }
    })
  })(graphql(createCompletionMutation)(CompletionsAdd))
);
