import React from 'react';
import NewEdition from './NewEdition';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('<NewEdition />', () => {
  it('should have an input to enter edition name', () => {
    const elem = shallow(<NewEdition />);
    expect(elem.find('input#edition-name-input[type="text"]').length).toEqual(1);
  });
  it('should have an input to upload the edition pages');
  it('should have an input to upload the editions assets');
})
