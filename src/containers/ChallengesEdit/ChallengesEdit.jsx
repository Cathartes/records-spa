import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import challengesListQuery from '../../queries/challengesListQuery';
import updateChallengeMutation from '../../mutations/updateChallengeMutation';

import ChallengesForm from '../../components/ChallengesForm';

class ChallengesEdit extends PureComponent {
  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
          id: this.props.challenge.id,
          maxCompletions: parseInt(state.maxCompletions, 10),
          name: state.name,
          pointsCompletion: parseInt(state.pointsCompletion, 10),
          pointsFirst: parseInt(state.pointsFirst, 10),
          pointsSecond: parseInt(state.pointsSecond, 10),
          pointsThird: parseInt(state.pointsThird, 10)
        },
        refetchQueries: [
          {
            query: challengesListQuery,
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
      <ChallengesForm
        onFormSubmit={this.onFormSubmit}
        submitText="Update"
        titleText="Update Challenge"
        {...this.props}
      />
    );
  }
}

ChallengesEdit.propTypes = {
  challenge: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  recordBookId: PropTypes.string.isRequired
};

export default graphql(updateChallengeMutation)(ChallengesEdit);
