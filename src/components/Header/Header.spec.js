import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Header from './Header';

describe('<Header/>', function() {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<Header />);
  });

  it('Header should contain a single brand link', function() {
    let homeLink = wrapper.find('nav .navbar-brand');
    expect(homeLink).to.have.lengthOf(1);
  });

  describe('Brand link', function() {
    let homeLink;
    beforeEach(function() {
      homeLink = wrapper.find('nav .navbar-brand');
    });

    it('should be an IndexLink', function() {
      expect(homeLink.first().name()).to.equal('IndexLink');
    });

    it('should point to home page', function() {
      expect(homeLink.first().prop('to')).to.equal('/');
    });

    it('should contain a single children', function() {
      expect(homeLink.first().children().length).to.equal(1);
    });

    it('should contain img as children', function() {
      expect(homeLink.first().children().first().name()).to.equal('img');
    });
  });
  describe('Navbar list', function() {
    let navbarList;
    beforeEach(function() {
      navbarList = wrapper.find('nav ul li');
    });

    it('should contain two links', function() {
      expect(navbarList.length).to.equal(2);
    });

    it('should has IndexLink as first link', function() {
      expect(navbarList.first().children().name()).to.equal('IndexLink');
    });

    it('should has link to Home page as first link', function() {
      expect(navbarList.first().children().prop('to')).to.equal('/');
    });

    it('should has link to Home page with active class', function() {
      expect(navbarList.first().children().prop('activeClassName')).to.equal('active');
    });

    it('should has link to Home page with Home description', function() {
      expect(navbarList.first().children().children().text()).to.equal('Home');
    });

    it('should has link to About page as second link', function() {
      expect(navbarList.at(1).children().prop('to')).to.equal('/about');
    });

    it('should has link to About page with active class', function() {
      expect(navbarList.at(1).children().prop('activeClassName')).to.equal('active');
    });

    it('should has link to About page with About description', function() {
      expect(navbarList.at(1).children().children().text()).to.equal('About');
    });
  });
});
