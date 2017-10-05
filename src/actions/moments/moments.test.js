import {
  MOMENTS_LIST_ERROR,
  momentsListError,
  MOMENTS_LIST_REQUESTING,
  momentsListRequesting,
  MOMENTS_LIST_SUCCESS,
  momentsListSuccess
} from './moments';

describe('moments actions', () => {
  it('should create momentsListError', () => {
    const isError = true;
    const expectedAction = {
      type: MOMENTS_LIST_ERROR,
      isError
    };
    expect(momentsListError(isError)).toEqual(expectedAction);
  });

  it('should create momentsListRequesting', () => {
    const isRequesting = true;
    const expectedAction = {
      type: MOMENTS_LIST_REQUESTING,
      isRequesting
    };
    expect(momentsListRequesting(isRequesting)).toEqual(expectedAction);
  });

  it('should create momentsListSuccess', () => {
    const moments = [{ test: 'Fake Moment' }];
    const expectedAction = {
      type: MOMENTS_LIST_SUCCESS,
      moments
    };
    expect(momentsListSuccess(moments)).toEqual(expectedAction);
  });
});
