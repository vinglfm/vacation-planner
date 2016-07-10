import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './views/about/About'

class App extends React.Component {
  render() {
    var Child;

    switch(this.props.route) {
      case 'about':
        Child = About;
      break;
      default:
        Child = Home;
    }
    return (
      <div>
        <Child/>
      </div>
    );
  }
}
function render() {
  var route = window.location.hash.substr(1);
  console.log(route);
  ReactDOM.render(<App route={route}/>, document.getElementById('root'));
}
window.addEventListener('hashchange', render);
render();

// ReactDOM.render(<App />, document.getElementById('root'));
