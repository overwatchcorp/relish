import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import actionTypes from '../constants/actionTypes';
import publicConfigActions from './publicConfig';

it('getRequest() should create action with type GET_PUBLICCONFIG', () => {
  const expectedAction = {
    type: actionTypes.GET_PUBLICCONFIG,
  };
  expect(publicConfigActions.getRequest()).toEqual(expectedAction);
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

const mockStore = configureMockStore([thunk]);

it('create GET_PUBLICCONFIG_SUCCESS after successfully getting public config data', () => {
  const publicConfigBody = {
    body: {
      publicationName: 'Test Publication',
    },
  };

  nock('https://relish-test.firebaseio.com/')
    .get('/publicConfig.json')
    .reply(200, publicConfigBody.body);

  const expectedActions = [
    publicConfigActions.getRequest(),
    publicConfigActions.getSuccess({
      publicationName: publicConfigBody.body.publicationName,
    }),
  ];
  const store = mockStore({
    publicationName: '',
  });

  return store.dispatch(publicConfigActions.get()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
