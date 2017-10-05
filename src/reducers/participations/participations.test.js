import { PARTICIPATIONS_LIST_SUCCESS } from '../../actions/participations';

import reducer from './participations';

describe('participations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      participationsList: [],
      participationsListRequesting: false
    });
  });

  it('should handle PARTICIPATIONS_LIST_SUCCESS', () => {
    const participations = [{ test: 'Fake Participation' }];
    expect(
      reducer([], {
        type: PARTICIPATIONS_LIST_SUCCESS,
        participations: participations
      })
    ).toEqual({ participationsList: participations });
  });
});
