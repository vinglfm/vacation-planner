import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Sidebar from './Sidebar';

describe('<Sidebar/>', function() {
  let wrapper;
  beforeEach(function(){
    let countries = [
      {"name": "Andorra"},
      {"name": "United Arab Emirates"},
      {"name": "Ukraine"},
    ];
    let onFilterChanged = function() { };
    wrapper = shallow(<Sidebar countries={countries} onFilterChanged={onFilterChanged}/>);
  });

  it('Sidebar has input field', function() {
    expect(wrapper.find('input')).to.have.lengthOf(1);
  });

  it('input field has onFilterChanged listener', function() {
    expect(wrapper.find('input').props('onFilterChanged')).to.exist;
  });

  it('Sidebar contains 3 SidebarItem', function() {
    expect(wrapper.find('SidebarItem')).to.have.lengthOf(3);
  });
});
