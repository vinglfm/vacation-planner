import React from 'react';
// import styles from './styles.module.css';

export default class Header extends React.Component {
  render() {
    const logo = require("../../images/logo.png");
    return (
      <nav className = "navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={logo} />
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
