import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Sidebar from './Sidebar';

describe('<Sidebar/>', function() {
  let wrapper;
  beforeEach(function(){
    let props = {
      countries: [
        {"name": "Andorra"},
        {"name": "United Arab Emirates"},
        {"name": "Ukraine"},
      ],
      selected: 1,
      onFilterChanged: function() { },
      onItemClick: function() { }
    };
    wrapper = shallow(<Sidebar {...props}/>);
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
