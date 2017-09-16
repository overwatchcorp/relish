const createNewEdition =  newEditionName => ({
  type: 'CREATE_NEW_EDITION',
  isSending: true,
  newEditionName,
});

export default {
  createNewEdition,
};
