import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import Header from './Header';
import styles from './styles.module.css';

describe('<Header/>', function() {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<Header />);
  });

  it('Header should contain a single brand link', function() {
    let homeLink = wrapper.find('nav .navbar-brand');
    expect(homeLink.length).toBe(1);
  });

  describe('Brand link', function() {
    let homeLink;
    beforeEach(function() {
      homeLink = wrapper.find('nav .navbar-brand');
    });

    it('should be an IndexLink', function() {
      expect(homeLink.first().name()).toBe('IndexLink');
    });

    it('should point to home page', function() {
      expect(homeLink.first().prop('to')).toBe('/');
    });

    it('should contain a single children', function() {
      expect(homeLink.first().children().length).toBe(1);
    });

    it('should contain img as children', function() {
      expect(homeLink.first().children().first().name()).toBe('img');
    });

    describe('Navbar list', function() {
      let navbarList;
      beforeEach(function() {
        navbarList = wrapper.find('nav ul li');
      });

      it('should contain two links', function() {
        expect(navbarList.length).toBe(2);
      });

      it('should has IndexLink as first link', function() {
        expect(navbarList.first().children().name()).toBe('IndexLink');
      });

      it('should has link to Home page as first link', function() {
        expect(navbarList.first().children().prop('to')).toBe('/');
      });

      it('should has link to Home page with active class', function() {
        expect(navbarList.first().children().prop('activeClassName')).toBe('active');
      });

      it('should has link to Home page with active class', function() {
        console.log(navbarList.first().children().text());
        expect(navbarList.first().children().children().text()).toBe('Home');
      });
    });
  });
});
