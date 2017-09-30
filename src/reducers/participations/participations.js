import {
  PARTICIPATIONS_LIST_REQUESTING,
  PARTICIPATIONS_LIST_SUCCESS
} from '../../actions/participations';

const initialState = {
  participationsList: [],
  participationsListRequesting: false
};

const participations = (state = initialState, action) => {
  switch (action.type) {
    case PARTICIPATIONS_LIST_REQUESTING:
      return Object.assign({}, state, {
        participationsListRequesting: action.isRequesting
      });
    case PARTICIPATIONS_LIST_SUCCESS:
      return Object.assign({}, state, {
        participationsList: action.participations
      });

    default:
      return state;
  }
};

export default participations;
