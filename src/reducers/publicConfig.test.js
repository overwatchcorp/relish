import publicConfig from './publicConfig';

it('should initialize state', () => {
  // we will use combineReducers so the state will initially be undefined
  const state = publicConfig(undefined, {
    type: 'AN_IRRELEVANT_ACTION',
  });
  expect(state).toEqual({
    publicationName: '',
  });
});

it('should set isFetching to true on GET_PUBLICCONFIG', () => {
  const state = publicConfig(undefined, {
    type: 'GET_PUBLICCONFIG',
  });
  expect(state).toEqual(expect.objectContaining({
    isFetching: true,
  }));
});

it('should set isFetching to false and set publicConfig in state on GET_PUBLICCONFIG_SUCCESS', () => {
  const testPublicatonName = 'Relish Magazine';
  const state = publicConfig(undefined, {
    type: 'GET_PUBLICCONFIG_SUCCESS',
    // we use object spread notation to spread the contents into the parent
    publicConfig: {
      publicationName: testPublicatonName,
    },
  });
  expect(state).toEqual(expect.objectContaining({
    isFetching: false,
    publicationName: testPublicatonName,
  }));
});

it('should set isFetching to false and err to the error message on GET_PUBLICCONFIG_FAILURE', () => {
  const err = 'Database operation failed!';
  const state = publicConfig(undefined, {
    type: 'GET_PUBLICCONFIG_FAILURE',
    err,
  });
  expect(state).toEqual(expect.objectContaining({
    isFetching: false,
    err,
  }));
});

it('should set isSending to true on SET_PUBLICCONFIG', () => {
  const state = publicConfig(undefined, {
    type: 'SET_PUBLICCONFIG',
  });
  expect(state).toEqual(expect.objectContaining({
    isSending: true,
  }));
});

it('should set isSending to false and setSuccess to true on SET_PUBLICCONFIG_SUCCESS', () => {
  const state = publicConfig(undefined, {
    type: 'SET_PUBLICCONFIG_SUCCESS',
  });
  expect(state).toEqual(expect.objectContaining({
    isFetching: false,
    setSuccess: true,
  }));
});

it('should set isSending to false and setSuccess to false and err to the error message on SET_PUBLICCONFIG_FAILURE', () => {
  const err = 'Database opertaion failed!';
  const state = publicConfig(undefined, {
    type: 'SET_PUBLICCONFIG_FAILURE',
    err,
  });
  expect(state).toEqual(expect.objectContaining({
    isSending: false,
    setSuccess: false,
    err,
  }));
});
