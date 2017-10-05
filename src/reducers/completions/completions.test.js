import { COMPLETIONS_LIST_SUCCESS } from '../../actions/completions';

import reducer from './completions';

describe('completions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      completionsList: [],
      completionsListRequesting: false
    });
  });

  it('should handle COMPLETIONS_LIST_SUCCESS', () => {
    const completions = [{ test: 'Fake Completion' }];
    expect(
      reducer([], {
        type: COMPLETIONS_LIST_SUCCESS,
        completions: completions
      })
    ).toEqual({ completionsList: completions });
  });
});
