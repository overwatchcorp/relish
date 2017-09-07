import fetch from 'isomorphic-fetch';
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
    return fetch('https://relish-test.firebaseio.com/publicConfig')
      .catch(err => dispatch(getFailure(err)))
      // .then(res => res.json())
      .then(res => res.json())
      .then(res => dispatch(getSuccess(res.body)));
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
