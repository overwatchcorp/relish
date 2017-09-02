import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const validateConfig = (values) => {
  const errors = {};
  if (values.publicationName.length < 1) {
    errors.publicationName = 'Required';
  }
  return errors;
};

const InitConfigForm = (props) => {
  const { handleSubmit, success, handleChange } = props;
  const button = {};
  switch (success) {
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
        <Field
          required
          name="publicationName"
          component="input"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <button
        className={button.class}
        type="submit"
      >{button.text}</button>
    </form>
  );
};
InitConfigForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  success: PropTypes.bool,
  handleChange: PropTypes.func,
};
InitConfigForm.defaultProps = {
  success: null,
  handleChange: () => {},
};
const ConfigForm = reduxForm({
  form: 'config',
  validateConfig,
})(InitConfigForm);

export default ConfigForm;
