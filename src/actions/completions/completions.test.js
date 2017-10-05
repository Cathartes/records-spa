import {
  COMPLETIONS_LIST_ERROR,
  completionsListError,
  COMPLETIONS_LIST_REQUESTING,
  completionsListRequesting,
  COMPLETIONS_LIST_SUCCESS,
  completionsListSuccess
} from './completions';

describe('completions actions', () => {
  it('should create completionsListError', () => {
    const isError = true;
    const expectedAction = {
      type: COMPLETIONS_LIST_ERROR,
      isError
    };
    expect(completionsListError(isError)).toEqual(expectedAction);
  });

  it('should create completionsListRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: COMPLETIONS_LIST_REQUESTING,
      isRequesting
    };
    expect(completionsListRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create completionsListSuccess', () => {
    const completions = [{ test: 'Fake Completion' }];
    const expectedAction = {
      type: COMPLETIONS_LIST_SUCCESS,
      completions
    };
    expect(completionsListSuccess(completions)).toEqual(expectedAction);
  });
});
