import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import updateCompletionMutation from '../../mutations/updateCompletionMutation';
import challengesListQuery from '../../queries/challengesListQuery';
import completionsListQuery from '../../queries/completionsListQuery';

import CompletionsForm from '../../components/CompletionsForm';

class CompletionsEdit extends PureComponent {
  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
          id: this.props.completion.id,
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

CompletionsEdit.propTypes = {
  completion: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  recordBookId: PropTypes.string.isRequired
};

export default graphql(updateCompletionMutation)(CompletionsEdit);
