import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';


const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(
      logger,
      thunkMiddleware,
    ));
  return store;
};

const store = configureStore();

export default store;
