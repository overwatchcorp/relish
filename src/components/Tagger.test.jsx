import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureMockStore from 'redux-mock-store';
import Tagger from './Tagger';

// configure DOM adapter so enzyme can read DOM
configure({ adapter: new Adapter() });
// configure mock store so dispatch will work
const mockStore = configureMockStore([]);
const store = mockStore({
  pageFiles: [
    { name: 'testfile.jpg', type: 'image/jpg' },
  ],
});

describe('<Tagger />', () => {
  const mockProps = {
    store,
    handleTagPage: () => {},
  };
  it('should have a grid with the page images', () => {
    const elem = shallow(<Tagger {...mockProps} />);
    expect(elem.find('img.tagger-page-image').length).toBeGreaterThan(0);
  });
});
