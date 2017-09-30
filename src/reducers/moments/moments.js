import {
  MOMENTS_LIST_REQUESTING,
  MOMENTS_LIST_SUCCESS
} from '../../actions/moments';

const initialState = {
  momentsList: [],
  momentsListRequesting: false
};

const moments = (state = initialState, action) => {
  switch (action.type) {
    case MOMENTS_LIST_REQUESTING:
      return Object.assign({}, state, {
        momentsListRequesting: action.isRequesting
      });
    case MOMENTS_LIST_SUCCESS:
      return Object.assign({}, state, { momentsList: action.moments });

    default:
      return state;
  }
};

export default moments;
