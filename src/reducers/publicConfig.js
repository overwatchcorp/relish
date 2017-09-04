const publicConfig = (state = {
  publicationName: '',
}, action) => {
  switch (action.type) {
    case ('GET_PUBLICCONFIG'):
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ('GET_PUBLICCONFIG_SUCCESS'):
      return Object.assign({}, state, {
        isFetching: false,
        ...action.publicConfig,
      });
    case ('GET_PUBLICCONFIG_FAILURE'):
      return Object.assign({}, state, {
        isFetching: false,
        err: action.err,
      });
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
