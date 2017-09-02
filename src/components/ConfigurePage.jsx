import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions';
import ConfigForm from './ConfigForm';

const Configure = ({ config, setConfig, dispatch }) => (
  <div className="container mt-2">
    <h3>Configuration</h3>
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
Configure.propTypes = {
  config: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  setConfig: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
// map config data and setConfig action to presentational ConfigurePage component
const mapStateToProps = state => ({
  config: state.config,
});
const mapDispatchToProps = dispatch => ({
  setConfig: newConfigItems => dispatch(actions.setConfig(newConfigItems)),
});
const ConfigurePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Configure);

export default ConfigurePage;
