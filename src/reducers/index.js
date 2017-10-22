import { combineReducers } from 'redux';
import publicConfig from './publicConfig';
import edition from './edition';

const reducers = combineReducers({
  publicConfig,
  edition,
});

export default reducers;
