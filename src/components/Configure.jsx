import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

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

const Configure = (props, { store }) => {
  const state = store.getState();
  // define this.input.value so it's defined in editPublicationName()
  this.input = { value: state.publicationName };
  // reuseable action that sets the publication name in the store based off input
  const editPublicationName = (publicationName) => {
    store.dispatch({
      type: 'EDIT_PUBLICATION_NAME',
      publicationName,
    });
  };
  return (
    <div className="container mt-2">
      <h4>Configuration</h4>
      <div className="card">
        <div className="card-body">
          <ConfigForm
            onSubmit={values => editPublicationName(values.publicationName)}
          />
        </div>
      </div>
    </div>
  );
};


Configure.contextTypes = {
  store: PropTypes.object,
};

export default Configure;
