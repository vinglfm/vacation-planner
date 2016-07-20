import React from 'react';
import {Link, IndexLink} from 'react-router';
import styles from './styles.module.css';

export default class Header extends React.Component {
  render() {
    const logo = require("../../images/logo.png");
    return (
      <nav className = "navbar navbar-default">
        <div className="container-fluid">
          <IndexLink to="/" className="navbar-brand">
            <img src={logo} />
          </IndexLink>
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
