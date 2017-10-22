import React from 'react';
import { connect } from 'react-redux';
import editionActions from '../actions/edition';

const NewEdition = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>New Edition</h2>
      <form>
        <label htmlFor="edition-name-input">new edition name</label>
        <input onChange={props.handleNameChange} id="edition-name-input" type="text" />
      </form>
      <form>
        <div>
          <label htmlFor="pages-upload">upload pages images</label>
          <input id="pages-upload" type="file" onChange={props.handlePageChange} />
        </div>
      </form>
      <form>
        <div>
          <label htmlFor="asset-upload">upload individual work images</label>
          <input id="works-upload" type="file" onChange={props.handleWorkChange} />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  editionName: '',
});

const mapDispatchToProps = (dispatch) => ({
  handleNameChange: e => dispatch(editionActions.editingEditionName(e.target.value)),
});

const FuncNewEdition = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewEdition);

export default FuncNewEdition;
// export for unit testing
export { NewEdition };
