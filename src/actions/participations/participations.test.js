import {
  PARTICIPATIONS_LIST_ERROR,
  participationsListError,
  PARTICIPATIONS_LIST_REQUESTING,
  participationsListRequesting,
  PARTICIPATIONS_LIST_SUCCESS,
  participationsListSuccess
} from './participations';

describe('participations actions', () => {
  it('should create participationsListError', () => {
    const isError = true;
    const expectedAction = {
      type: PARTICIPATIONS_LIST_ERROR,
      isError
    };
    expect(participationsListError(isError)).toEqual(expectedAction);
  });

  it('should create participationsListRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: PARTICIPATIONS_LIST_REQUESTING,
      isRequesting
    };
    expect(participationsListRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create participationsListSuccess', () => {
    const participations = [{ test: 'Fake Participation' }];
    const expectedAction = {
      type: PARTICIPATIONS_LIST_SUCCESS,
      participations
    };
    expect(participationsListSuccess(participations)).toEqual(expectedAction);
  });
});
