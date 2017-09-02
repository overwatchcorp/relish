/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
Provider.childContextTypes = {
  store: PropTypes.object,
};

registerServiceWorker();
