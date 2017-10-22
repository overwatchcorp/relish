import edition from './edition';

describe('edition reducer', () => {
  it('should init state', () => {
    const state = edition(undefined, {
      type: 'AN_IRRRRELEVANT_ACTION',
    });
    expect(state).toEqual({
      editionName: '',
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
});

