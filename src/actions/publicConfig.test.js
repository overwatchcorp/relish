import actionTypes from '../constants/actionTypes';
import publicConfigActions from './publicConfig';

it('get() should create action with type GET_PUBLICCONFIG', () => {
  const expectedAction = {
    type: actionTypes.GET_PUBLICCONFIG,
  };
  expect(publicConfigActions.get()).toEqual(expectedAction);
});

it('getSuccess() should create action type GET_PUBLICCONFIG_SUCCESS', () => {
  const expectedAction = {
    type: actionTypes.GET_PUBLICCONFIG_SUCCESS,
    publicationName: 'Relish',
  };
  expect(publicConfigActions.getSuccess({
    publicationName: 'Relish',
  })).toEqual(expectedAction);
});

it('getFailure() should create action with type GET_PUBLICCONFIG_FAILURE and an err field', () => {
  const err = 'an error occured';
  const expectedAction = {
    type: actionTypes.GET_PUBLICCONFIG_FAILURE,
    err,
  };
  expect(publicConfigActions.getFailure(err)).toEqual(expectedAction);
});

it('set() should create an action with type SET_PUBLICCONFIG', () => {
  const expectedAction = {
    type: actionTypes.SET_PUBLICCONFIG,
  };
  expect(publicConfigActions.set()).toEqual(expectedAction);
});

it('setSuccess() should create an action with type SET_PUBLICCONFIG_SUCCESS', () => {
  const expectedAction = {
    type: actionTypes.SET_PUBLICCONFIG_SUCCESS,
  };
  expect(publicConfigActions.setSuccess()).toEqual(expectedAction);
});

it('setFailure() should create an action with type SET_PUBLICCONFIG_FAILURE with err field', () => {
  const err = 'an error occured';
  const expectedAction = {
    type: actionTypes.SET_PUBLICCONFIG_FAILURE,
    err,
  };
  expect(publicConfigActions.setFailure(err)).toEqual(expectedAction);
});
