import React from 'react';
import ConnectedNewEdition, { NewEdition } from './NewEdition';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import configureMockStore from 'redux-mock-store'; 
import { Provider } from 'redux';
import thunk from 'redux-thunk';

// configure DOM adapter so enzyme can read DOM
configure({ adapter: new Adapter() });
// configure mock store so dispatch will work
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  editionName: '',
});


describe('<NewEdition />', () => {
  it('should have an input to enter edition name', () => {
    const elem = shallow(<NewEdition store={store} />);
    expect(elem.find('input#edition-name-input[type="text"]').length).toEqual(1);
  });
  it('should have an input to upload the edition pages', () => {
    const elem = shallow(<NewEdition store={store} />);
    expect(elem.find('input#pages-upload[type="file"]').length).toEqual(1);
  });
  it('should have an input to upload the editions works', () => {
    const elem = shallow(<NewEdition store={store} />);
    expect(elem.find('input#works-upload[type="file"]').length).toEqual(1);
  });
})
