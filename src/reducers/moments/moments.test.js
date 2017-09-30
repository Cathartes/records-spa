import { MOMENTS_LIST_SUCCESS } from '../../actions/moments';

import reducer from './moments';

describe('moments reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle MOMENTS_LIST_SUCCESS', () => {
    const moments = [{ test: 'Fake Moment' }];
    expect(
      reducer([], {
        type: MOMENTS_LIST_SUCCESS,
        moments: moments
      })
    ).toEqual(moments);
  });
});
