import React from 'react';
import {Route, IndexRoute} from 'react-router';
import About from './components/views/about/About';
import Home from './components/views/home/Home';
import App from './components/App';

export default (
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
      </Route>
  );
