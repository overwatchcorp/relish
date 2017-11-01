import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import editionActions from '../actions/edition';
import Tagger from './Tagger';

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
          <input id="pages-upload" type="file" onChange={props.handlePageChange} multiple />
        </label>
      </div>
    </form>
    <form>
      <div>
        <label htmlFor="works-upload">
          upload individual work images
          <input id="works-upload" type="file" onChange={props.handleWorkChange} multiple />
        </label>
      </div>
    </form>
    {/* if user has selected both page and work files, show tagger */}
    { (props.pageFiles.length > 0 && props.pageFiles.length > 0) ?
      <Tagger />
      : <small>Please select image assets</small>
    }
  </div>
);

NewEdition.propTypes = {
  handleNameChange: propTypes.func.isRequired,
  handlePageChange: propTypes.func.isRequired,
  handleWorkChange: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  editionName: state.edition.editionName,
  pageFiles: state.edition.pageFiles,
  workFiles: state.edition.workFiles,
});

const readImage = file =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.readAsDataURL(file);
  });

const mapDispatchToProps = dispatch => ({
  handleNameChange: e => dispatch(editionActions.editingEditionName(e.target.value)),
  handlePageChange: e => [...e.target.files].forEach(file =>
    readImage(file).then((i) => {
      const readFile = Object.assign(file, { src: i });
      dispatch(editionActions.addFile({ fileCategory: 'page', file: readFile }));
    })),
  handleWorkChange: e => [...e.target.files].forEach(file =>
    readImage(file).then((i) => {
      const readFile = Object.assign(file, { src: i });
      dispatch(editionActions.addFile({ fileCategory: 'work', file: readFile }));
    })),
});

const FuncNewEdition = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewEdition);

export default FuncNewEdition;
// export for unit testing
export { NewEdition };
