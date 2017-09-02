/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import PropTypes from 'prop-types';
import reducers from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(logger))}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
Provider.childContextTypes = {
  store: PropTypes.object,
};

registerServiceWorker();
