import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import challengesListQuery from '../../queries/challengesListQuery';
import createChallengeMutation from '../../mutations/createChallengeMutation';

import ChallengesForm from '../../components/ChallengesForm';

class ChallengesAdd extends PureComponent {
  onFormSubmit = state => {
    this.props
      .mutate({
        variables: {
          recordBookId: this.props.recordBookId,
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
        submitText="Add"
        titleText="Add Challenge"
        {...this.props}
      />
    );
  }
}

ChallengesAdd.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  recordBookId: PropTypes.number.isRequired
};

export default graphql(createChallengeMutation)(ChallengesAdd);
