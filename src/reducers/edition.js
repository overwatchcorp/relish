// reducer for editing editions
const edition = (state = {
  editionName: '',
  pageFiles: [],
  workFiles: [],
}, action) => {
  switch (action.type) {
    case 'EDITING_EDITION_NAME': {
      const newState = Object.assign({}, state, {
        editionName: action.editionName,
      });
      return newState;
    }
    case 'ADD_PAGE_FILE': {
      const newPageFileList = [action.file, ...state.pageFiles];
      const newState = Object.assign({}, state, {
        pageFiles: newPageFileList,
      });
      return newState;
    }
    case 'ADD_WORK_FILE': {
      const newWorkFileList = [action.file, ...state.workFiles];
      const newState = Object.assign({}, state, {
        workFiles: newWorkFileList,
      });
      return newState;
    }
    default:
      return state;
  }
};

export default edition;
