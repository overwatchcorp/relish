import api from '../api';

const createNewEdition = () => ({
  type: 'CREATE_NEW_EDITION',
  isSending: true,
});

const createNewEditionSuccess = () => ({
  type: 'CREATE_NEW_EDITION_SUCCESS',
  isSending: false,
});

const createNewEditionFailure = err => ({
  type: 'CREATE_NEW_EDITION_FAILURE',
  isSending: false,
  err,
});

const newEdition = editionName =>
  (dispatch) => {
    dispatch(createNewEdition());
    return api.createNewEdition(editionName)
      .then(res => dispatch(createNewEditionSuccess(res)));
  };

const editingEditionName = editionName => ({
  type: 'EDITING_EDITION_NAME',
  editionName,
});

const addFile = ({ fileCategory, file }) => {
  switch (fileCategory) {
    case ('page'): {
      return ({
        type: 'ADD_PAGE_FILE',
        file
      });
    }
    default: {
      return false;
    }
  }
};

export default {
  createNewEdition,
  createNewEditionSuccess,
  createNewEditionFailure,
  newEdition,
  editingEditionName,
  addFile,
};
