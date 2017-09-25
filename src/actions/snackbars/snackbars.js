export const SNACKBAR_ADD = 'SNACKBAR_ADD';
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';
export const SNACKBAR_REMOVE = 'SNACKBAR_REMOVE';

let nextSnackbarId = 1;
export const snackbarAdd = message => {
  return {
    type: SNACKBAR_ADD,
    message,
    id: nextSnackbarId++,
    open: true
  };
};

export const snackbarClose = id => {
  return {
    type: SNACKBAR_CLOSE,
    id
  };
};

export const snackbarRemove = id => {
  return {
    type: SNACKBAR_REMOVE,
    id
  };
};
