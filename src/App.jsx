import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './createStore';
import Config from './components/Config';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Config} />
    </Router>
  </Provider>
);

export default App;
