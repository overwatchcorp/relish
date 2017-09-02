import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Configure from './components/Configure';
// import './App.css';

// inject store into context
const App = () => (
  <Router>
    <Route path="/" component={Configure} />
  </Router>
);

App.contextTypes = {
  store: PropTypes.object,
};

export default App;
