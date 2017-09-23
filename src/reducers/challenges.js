import { CHALLENGES_GET_SUCCESS } from '../actions/challenges';

const challenges = (state = [], action) => {
  switch (action.type) {
    case CHALLENGES_GET_SUCCESS:
      return action.challenges;
    default:
      return state;
  }
};

export default challenges;
