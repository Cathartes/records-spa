import { CHALLENGES_GET_SUCCESS } from '../../actions/challenges';

import reducer from './challenges';

describe('challenges reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CHALLENGES_GET_SUCCESS', () => {
    const challenges = [{ test: 'Fake Challenge' }];
    expect(
      reducer([], {
        type: CHALLENGES_GET_SUCCESS,
        challenges: challenges
      })
    ).toEqual(challenges);
  });
});
