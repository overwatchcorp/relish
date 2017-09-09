const publicConfig = (state = {
  publicationName: '',
}, action) => {
  const actionContents = { ...action };
  delete actionContents.type;
  switch (action.type) {
    case ('GET_PUBLICCONFIG'):
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ('GET_PUBLICCONFIG_SUCCESS'):
      return Object.assign({}, state, {
        isFetching: false,
        ...actionContents,
      });
    case ('GET_PUBLICCONFIG_FAILURE'):
      return Object.assign({}, state, {
        isFetching: false,
        err: action.err,
      });
    // // check to make sure we are changing at least one setting
    // assert.deepEqual(typeof publicConfig, 'object');
    // // check to make sure the setting(s) we are changing exist
    // const configItems = Object.keys(publicConfig.publicConfig);
    // configItems.forEach(item => assert.deepEqual(permittedPublicConfigItems[item], true));
    case ('SET_PUBLICCONFIG'):
      return Object.assign({}, state, {
        isSending: true,
      });
    case ('SET_PUBLICCONFIG_SUCCESS'):
      return Object.assign({}, state, {
        isFetching: false,
        setSuccess: true,
      });
    case ('SET_PUBLICCONFIG_FAILURE'):
      return Object.assign({}, state, {
        isSending: false,
        setSuccess: false,
        err: action.err,
      });
    default:
      return state;
  }
};

export default publicConfig;
