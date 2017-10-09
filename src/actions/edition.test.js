import actionTypes from '../constants/actionTypes';
import editionActions from './edition';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// mock API method for creating editions
jest.mock('../api', () => ({
  createNewEdition: () => new Promise((resolve, reject) => {
    return resolve()
  }),
}));
import api from '../api';

const mockStore = configureMockStore([thunk]);

it('createNewEdition() should create an action with type CREATE_NEW_EDITION', () => {
  const expectedAction = {
    type: 'CREATE_NEW_EDITION',
    isSending: true,
  };
  expect(editionActions.createNewEdition()).toEqual(expectedAction);
});

it('createNewEditionSuccess() should create an action with type CREATE_NEW_EDITION_SUCCESS', () => {
  const expectedAction = {
    type: 'CREATE_NEW_EDITION_SUCCESS',
    isSending: false,
  }
  expect(editionActions.createNewEditionSuccess()).toEqual(expectedAction);
})

it('createNewEditionFailure() should create an action with type CREATE_NEW_EDITION_FAILURE with err object', () => {
  const sampleErr = new Error('something went wrong');
  const expectedAction = {
    type: 'CREATE_NEW_EDITION_FAILURE',
    isSending: false,
    err: sampleErr,
  }
  expect(editionActions.createNewEditionFailure(sampleErr)).toEqual(expectedAction);
});

it('newEdition() should create CREATE_NEW_EDITION_SUCCESS after adding object to db', () => {
  const testEditionName = 'test edition yay';

  const expectedActions = [
    editionActions.createNewEdition(),
    editionActions.createNewEditionSuccess(),
  ];

  const store = mockStore({
    newEditionName: '',
  });
  
  return store.dispatch(editionActions.newEdition(testEditionName))
  .then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  })
});
