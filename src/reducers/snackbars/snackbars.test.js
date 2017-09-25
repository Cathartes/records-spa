import {
  SNACKBAR_ADD,
  SNACKBAR_CLOSE,
  SNACKBAR_REMOVE
} from '../../actions/snackbars';

import reducer from './snackbars';

describe('snackbars reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle SNACKBAR_ADD', () => {
    const snackbar = { id: 1, message: 'Fake Snackbar', open: true };
    expect(reducer([], { type: SNACKBAR_ADD, ...snackbar })).toEqual([
      snackbar
    ]);
  });

  it('should handle SNACKBAR_CLOSE', () => {
    const snackbar = { id: 1 };
    const state = [snackbar];
    expect(reducer(state, { type: SNACKBAR_CLOSE, id: snackbar.id })).toEqual([
      { ...snackbar, open: false }
    ]);
  });

  it('should handle SNACKBAR_REMOVE', () => {
    const snackbar = { id: 1 };
    const state = [snackbar];
    expect(reducer(state, { type: SNACKBAR_REMOVE, id: snackbar.id })).toEqual(
      []
    );
  });
});
