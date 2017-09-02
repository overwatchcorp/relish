import api from '../api';

const fetchConfig = () =>
  (dispatch) => {
    // sets isLoading to true through reducers
    dispatch({ type: 'FETCH_CONFIG' });
    return api.fetchConfig()
      .then(res =>
        dispatch({
          type: 'FETCH_CONFIG_SUCCESS',
          configItems: res,
        }),
      );
  };

export default fetchConfig;
