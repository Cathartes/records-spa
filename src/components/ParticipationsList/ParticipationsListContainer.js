import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import createParticipationMutation from '../../mutations/createParticipationMutation';
import updateParticipationMutation from '../../mutations/updateParticipationMutation';
import participationsListQuery from '../../queries/participationsListQuery';

import ParticipationsList from './ParticipationsList';

const mapStateToProps = state => {
  return { currentUser: state.auth.currentUser };
};

export default compose(
  graphql(participationsListQuery, {
    options: props => ({ variables: { recordBookId: props.recordBookId } })
  }),
  graphql(createParticipationMutation, { name: 'createParticipationMutate' }),
  graphql(updateParticipationMutation, { name: 'updateParticipationMutate' }),
  connect(mapStateToProps)
)(ParticipationsList);
