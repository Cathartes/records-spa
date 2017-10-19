import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';

import createParticipationMutation from '../../mutations/createParticipationMutation';
import participationsListQuery from '../../queries/participationsListQuery';

import ParticipationsList from './ParticipationsList';

const mapStateToProps = state => {
  return { selectedUsers: state.usersList.selectedUsers };
};

export default compose(
  graphql(participationsListQuery, {
    options: props => ({ variables: { recordBookId: props.recordBookId } })
  }),
  graphql(createParticipationMutation),
  connect(mapStateToProps)
)(ParticipationsList);
