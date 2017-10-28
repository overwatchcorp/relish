import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import editionActions from '../actions/edition';

const NewEdition = props => (
  <div>
    <h2>New Edition</h2>
    <form>
      <label htmlFor="edition-name-input">
        new edition name
        <input onChange={props.handleNameChange} id="edition-name-input" type="text" />
      </label>
    </form>
    <form>
      <div>
        <label htmlFor="pages-upload">
          upload pages images
          <input id="pages-upload" type="file" onChange={props.handlePageChange} />
        </label>
      </div>
    </form>
    <form>
      <div>
        <label htmlFor="asset-upload">
          upload individual work images
          <input id="works-upload" type="file" onChange={props.handleWorkChange} />
        </label>
      </div>
    </form>
  </div>
);

NewEdition.propTypes = {
  handleNameChange: propTypes.func.isRequired,
  handlePageChange: propTypes.func.isRequired,
  handleWorkChange: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  editionName: state.editionName,
});

const mapDispatchToProps = dispatch => ({
  handleNameChange: e => dispatch(editionActions.editingEditionName(e.target.value)),
  handlePageChange: e => console.log(e.target.files),
  handleWorkChange: e => console.log(e.target.files),
});

const FuncNewEdition = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewEdition);

export default FuncNewEdition;
// export for unit testing
export { NewEdition };
