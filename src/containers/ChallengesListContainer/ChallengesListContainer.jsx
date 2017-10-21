import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';

import challengesListQuery from '../../queries/challengesListQuery';

import ChallengesList from '../../components/ChallengesList';

class ChallengesListContainer extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <ChallengesList challenges={data.challenges} loading={data.loading} />
    );
  }
}

export default graphql(challengesListQuery, {
  options: props => ({ variables: { recordBookId: props.recordBookId } })
})(ChallengesListContainer);
