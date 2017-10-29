import edition from './edition';

describe('edition reducer', () => {
  it('should init state', () => {
    const state = edition(undefined, {
      type: 'AN_IRRRRELEVANT_ACTION',
    });
    expect(state).toEqual({
      editionName: '',
      pageFiles: [],
      workFiles: [],
    });
  });
  it('should update editionName in store on EDITING_EDITION_NAME', () => {
    const testEditionName = 'test edition on alaska air SFO to PDX';
    const state = edition(undefined, {
      type: 'EDITING_EDITION_NAME',
      editionName: testEditionName,
    });
    expect(state.editionName).toEqual(testEditionName);
  });
  it('should add files to pageFiles in store on ADD_PAGE_FILE', () => {
    const testFile = { name: 'testfile.jpg', type: 'image/jpg' };
    const state = edition(undefined, {
      type: 'ADD_PAGE_FILE',
      file: testFile,
    });
    expect(state.pageFiles).toEqual([testFile]);
  });
});
