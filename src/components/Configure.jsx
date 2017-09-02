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
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="publicationName">Publication Name</label>
        <Field name="publicationName" component="input" type="text" className="form-control" />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
      >Save</button>
    </form>
  );
};
ConfigForm = reduxForm({
  form: 'config',
})(ConfigForm);

const ConfigurePage = ({ config }, dispatch) => (
  <div className="container mt-2">
    <h4>Configuration</h4>
    <div className="card">
      {/* {JSON.stringify(config.configItems)} */}
      <div className="card-body">
        {
          config.isFetching
            ? <div>Loading</div>
            : <div>
              <ConfigForm
                initialValues={{
                  publicationName: config.configItems.publicationName,
                }}
                onSubmit={values => console.log(values)}
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
    return (<Configure />);
  }
}
ConfigLifecycle.contextTypes = {
  store: PropTypes.object,
};

// ? <div>Loading configuration...</div>
// : <div>
//   {JSON.stringify(state.config)}
// <ConfigForm
//   initialValues={state.configItems}
//   onSubmit={values => console.log(values)}
// />
// </div>

export default ConfigLifecycle;
