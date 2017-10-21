import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import {shallow, configure} from 'enzyme';
import Config from './Config';

configure({ adapter: new Adapter() });

describe('<Config />', () => { 
  it('should have new edition button', () => {
    const element = shallow(<Config />);
    expect(element.find('Link[to="/config/new-edition/"]').length).toBeGreaterThanOrEqual(1);
  })
})
