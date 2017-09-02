import React, { Component } from 'react';
import PropTypes from 'prop-types';
import actions from '../actions';
import ConfigurePage from './ConfigurePage';

// use lifecycle hooks to fetch config info on mount
class ConfigLifecycle extends Component {
  componentDidMount() {
    this.context.store.dispatch(actions.fetchConfig());
  }
  render() {
    // uhh passing in dispatch as a function because i couldnt get connect to do it
    // TODO: fix connect and make it pass in dispatch
    return (<ConfigurePage dispatch={this.context.store.dispatch} />);
  }
}
ConfigLifecycle.contextTypes = {
  store: PropTypes.object,
};

export default ConfigLifecycle;
