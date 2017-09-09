import api from '../api';
import actionTypes from '../constants/actionTypes';

const getRequest = () => ({
  type: actionTypes.GET_PUBLICCONFIG,
});

const getSuccess = publicConfig => ({
  type: actionTypes.GET_PUBLICCONFIG_SUCCESS,
  ...publicConfig,
});

const getFailure = err => ({
  type: actionTypes.GET_PUBLICCONFIG_FAILURE,
  err,
});

const get = () =>
  (dispatch) => {
    dispatch(getRequest());
    return api.getPublicConfig()
      .catch(err => dispatch(getFailure(err)))
      .then(res => res.json())
      .then(res => dispatch(getSuccess(res)));
  };

const set = () => ({
  type: actionTypes.SET_PUBLICCONFIG,
});
const setSuccess = () => ({
  type: actionTypes.SET_PUBLICCONFIG_SUCCESS,
});
const setFailure = err => ({
  type: actionTypes.SET_PUBLICCONFIG_FAILURE,
  err,
});

export default {
  getRequest,
  getSuccess,
  getFailure,
  get,
  set,
  setSuccess,
  setFailure,
};
