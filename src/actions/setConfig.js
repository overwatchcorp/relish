import api from '../api';

const setConfig = newConfigValues =>
  (dispatch) => {
    // sets isLoading to true through reducers
    dispatch({ type: 'SET_CONFIG' });
    return api.setConfig(newConfigValues)
      .then(() => {
        dispatch({
          type: 'SET_CONFIG_SUCCESS',
        });
      })
      .catch(err => dispatch({
        type: 'SET_CONFIG_FAILURE',
        err,
      }));
  };

export default setConfig;
