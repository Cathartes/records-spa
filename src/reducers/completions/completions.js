import {
  COMPLETIONS_LIST_REQUESTING,
  COMPLETIONS_LIST_SUCCESS
} from '../../actions/completions';

const initialState = {
  completionsList: [],
  completionsListRequesting: false
};

const completions = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETIONS_LIST_REQUESTING:
      return Object.assign({}, state, {
        completionsListRequesting: action.isRequesting
      });
    case COMPLETIONS_LIST_SUCCESS:
      return Object.assign({}, state, { completionsList: action.completions });

    default:
      return state;
  }
};

export default completions;
