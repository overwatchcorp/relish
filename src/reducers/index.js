import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const publicationName = (state = '', action) => {
  switch (action.type) {
    case ('EDIT_PUBLICATION_NAME'):
      return (action.publicationName);
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
  publicationName,
  user,
  form: formReducer,
});

export default reducers;
