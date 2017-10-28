import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import editionActions from './edition';

// mock API method for creating editions
jest.mock('../api', () => ({
  createNewEdition: () => new Promise(resolve => resolve()),
}));

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
  };
  expect(editionActions.createNewEditionSuccess()).toEqual(expectedAction);
});

it('createNewEditionFailure() should create an action with type CREATE_NEW_EDITION_FAILURE with err object', () => {
  const sampleErr = new Error('something went wrong');
  const expectedAction = {
    type: 'CREATE_NEW_EDITION_FAILURE',
    isSending: false,
    err: sampleErr,
  };
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
    });
});

it('editingEditionName(editionName) should create an action with type EDITING_EDITION_NAME', () => {
  const testEditionName = 'test edition name';

  const expectedAction = {
    type: 'EDITING_EDITION_NAME',
    editionName: testEditionName,
  };
  expect(editionActions.editingEditionName(testEditionName)).toEqual(expectedAction);
});

it('addFile() with page fileCategory and image file should create action with type ADD_PAGE_FILE', () => {
  const testFile = {
    lastModified: 1506740531000,
    name: 'Messages Image(3105554528).png',
    size: 265953,
    type: 'image/png',
  };
  const expectedAction = {
    type: 'ADD_PAGE_FILE',
    file: testFile,
  };
  expect(editionActions.addFile({ fileCategory: 'page', file: testFile })).toEqual(expectedAction);
});
