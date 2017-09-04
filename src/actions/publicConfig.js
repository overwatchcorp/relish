import assert from 'assert';
import actionTypes from '../constants/actionTypes';
import permittedPublicConfigItems from '../constants/permittedPublicConfigItems';

const get = () => ({
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
  get,
  getSuccess,
  getFailure,
  set,
  setSuccess,
  setFailure,
};
