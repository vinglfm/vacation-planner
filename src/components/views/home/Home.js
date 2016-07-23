import React from 'react';
import countryApi from '../../../mockApi/countryApi';
import Sidebar from '../../Sidebar/Sidebar';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Countries</h1>
        </div>
        <Sidebar countries={countryApi.all()} />
      </div>
    );
  }
}
