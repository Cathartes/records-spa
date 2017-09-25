import {
  SNACKBAR_ADD,
  snackbarAdd,
  SNACKBAR_CLOSE,
  snackbarClose,
  SNACKBAR_REMOVE,
  snackbarRemove
} from './snackbars';

describe('snackbars actions', () => {
  it('should create snackbarAdd', () => {
    const message = 'Test Snackbar';
    const expectedAction = {
      type: SNACKBAR_ADD,
      message,
      id: 1,
      open: true
    };
    expect(snackbarAdd(message)).toEqual(expectedAction);
  });

  it('should create snackbarCLose', () => {
    const id = snackbarAdd('Test Snackbar').id;
    const expectedAction = {
      type: SNACKBAR_CLOSE,
      id
    };
    expect(snackbarClose(id)).toEqual(expectedAction);
  });

  it('should create snackbarRemove', () => {
    const id = snackbarAdd('Test Snackbar').id;
    const expectedAction = {
      type: SNACKBAR_REMOVE,
      id
    };
    expect(snackbarRemove(id)).toEqual(expectedAction);
  });
});
