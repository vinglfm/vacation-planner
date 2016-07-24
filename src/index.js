import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadCountries} from './actions/countryActions';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

const store = configureStore();
store.dispatch(loadCountries());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
   document.getElementById('root')
);
