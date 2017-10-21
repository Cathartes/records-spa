import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import challengesListQuery from '../../queries/challengesListQuery';
import completionsListQuery from '../../queries/completionsListQuery';
import createCompletionMutation from '../../mutations/createCompletionMutation';

import CompletionsForm from '../../components/CompletionsForm';

class CompletionsAdd extends PureComponent {
  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
          challengeId: state.challengeId,
          participationId: state.participationId,
          points: parseInt(state.points, 10) || null,
          rank: parseInt(state.rank, 10) || null
        },
        refetchQueries: [
          {
            query: challengesListQuery,
            variables: { recordBookId: this.props.recordBookId }
          },
          {
            query: completionsListQuery,
            variables: { recordBookId: this.props.recordBookId }
          }
        ]
      })
      .then(({ data }) => {
        this.props.onRequestClose();
      });
  };

  render() {
    return (
      <CompletionsForm
        onFormSubmit={this.onFormSubmit}
        submitText="Add"
        titleText="Add Completion"
        {...this.props}
      />
    );
  }
}

CompletionsAdd.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  recordBookId: PropTypes.string.isRequired
};

export default graphql(createCompletionMutation)(CompletionsAdd);
