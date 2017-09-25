import {
  CHALLENGES_GET_ERROR,
  challengesGetError,
  CHALLENGES_GET_REQUESTING,
  challengesGetRequesting,
  CHALLENGES_GET_SUCCESS,
  challengesGetSuccess
} from './challenges';

describe('challenges actions', () => {
  it('should create challengesGetError', () => {
    const isError = true;
    const expectedAction = {
      type: CHALLENGES_GET_ERROR,
      isError
    };
    expect(challengesGetError(isError)).toEqual(expectedAction);
  });

  it('should create challengesGetRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: CHALLENGES_GET_REQUESTING,
      isRequesting
    };
    expect(challengesGetRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create snackbarRemove', () => {
    const challenges = [{ test: 'Fake Challenge' }];
    const expectedAction = {
      type: CHALLENGES_GET_SUCCESS,
      challenges
    };
    expect(challengesGetSuccess(challenges)).toEqual(expectedAction);
  });
});
