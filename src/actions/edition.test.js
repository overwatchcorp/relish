import actionTypes from '../constants/actionTypes';
import editionActions from './edition';

it('createNewEdition() should create an action with type CREATE_NEW_EDITION', () => {
  const newEditionName = 'Test Editon 2016 Edition';
  const expectedAction = {
    type: 'CREATE_NEW_EDITION',
    isSending: true,
    newEditionName,
  };
  expect(editionActions.createNewEdition(newEditionName)).toEqual(expectedAction);
});
