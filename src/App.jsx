import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './createStore';
import Config from './components/Config';
import NewEdition from './components/NewEdition';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Config} />
        <Route path="/config/new-edition" component={NewEdition} />
      </div>
    </Router>
  </Provider>
);

export default App;
