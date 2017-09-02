import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const config = (state = {
  isFetching: true,
  configItems: {},
}, action) => {
  switch (action.type) {
    // when config is requested, set isFetching to true to indicate loading
    case ('FETCH_CONFIG'):
      return Object.assign({}, state, {
        isFetching: true,
      });
    case ('FETCH_CONFIG_SUCCESS'):
      return Object.assign({}, state, {
        isFetching: false,
        configItems: action.configItems,
      });
    default:
      return state;
  }
};

const user = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case ('USER_LOGIN'):
      return (state);
    default:
      return (state);
  }
};

const reducers = combineReducers({
  config,
  user,
  form: formReducer,
});

export default reducers;
