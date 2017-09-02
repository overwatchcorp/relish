import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import actions from '../actions';

/* options we need to configure:
- publication name
Action: {
  type: EDIT_PUBLICATION_NAME,
  publicationName: 'Your Name Here Magazine'
}
- first admin user
Action: {
  type: 'CREATE_USER',
  role: 'admin',
  name: 'Johnny Appleseed',
  email: 'johnnyappleseed@relishmag.pub'
}
*/

let ConfigForm = (props) => {
  const { handleSubmit, error } = props;
  const button = {};
  switch (props.success) {
    case (false):
      button.class = 'btn btn-danger';
      button.text = 'Retry';
      break;
    case (true):
      button.class = 'btn btn-success';
      button.text = 'Saved!';
      break;
    default:
      button.class = 'btn btn-primary';
      button.text = 'Save';
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="publicationName">Publication Name</label>
        <Field name="publicationName" component="input" type="text" className="form-control" onChange={props.handleChange}/>
      </div>
      <button
        className={button.class}
        type="submit"
      >{button.text}</button>
    </form>
  );
};
ConfigForm = reduxForm({
  form: 'config',
})(ConfigForm);

const ConfigurePage = ({ config, setConfig, dispatch }) => (
  <div className="container mt-2">
    <h4>Configuration</h4>
    <div className="card">
      <div className="card-body">
        {
          config.error
            ? <div className="alert alert-danger">{JSON.stringify(config.error)}</div>
            : null
        }
        {
          config.isFetching
            ? <div>Loading</div>
            : <div>
              <ConfigForm
                initialValues={{
                  publicationName: config.configItems.publicationName,
                }}
                onSubmit={values => setConfig(values)}
                handleChange={() => dispatch({ type: 'SET_CONFIG_RESETSUCCESS' })}
                success={config.setSuccess}
              />
            </div>
        }
      </div>
    </div>
  </div>
);
// map config data and setConfig action to presentational ConfigurePage component
const mapStateToProps = state => ({
  config: state.config,
});
const mapDispatchToProps = dispatch => ({
  setConfig: newConfigItems => dispatch(actions.setConfig(newConfigItems)),
});
const Configure = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigurePage);

// use lifecycle hooks to fetch config info on mount
class ConfigLifecycle extends Component {
  componentDidMount() {
    this.context.store.dispatch(actions.fetchConfig());
  }
  render() {
    // uhh passing in dispatch as a function because i couldnt get connect to do it
    // TODO: fix connect and make it pass in dispatch
    return (<Configure dispatch={this.context.store.dispatch} />);
  }
}
ConfigLifecycle.contextTypes = {
  store: PropTypes.object,
};

export default ConfigLifecycle;
