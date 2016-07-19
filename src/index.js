import React from 'react';
import ReactDOM from 'react-dom';

import Home from './views/home/Home';
import About from './views/about/About';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    let Child;

    switch(this.props.route) {
      case 'about':
        Child = About;
      break;
      default:
        Child = Home;
    }
    return (
      <div>
        <Header/>
        <Child/>
      </div>
    );
  }
}
function render() {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route}/>, document.getElementById('root'));
}
window.addEventListener('hashchange', render);
render();

// ReactDOM.render(<App />, document.getElementById('root'));
