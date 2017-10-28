// reducer for editing editions
const edition = (state = { editionName: '' }, action) => {
  switch (action.type) {
    case 'EDITING_EDITION_NAME': {
      const newState = Object.assign({}, state, {
        editionName: action.editionName,
      });
      return newState;
    }
    default:
      return state;
  }
};

export default edition;
