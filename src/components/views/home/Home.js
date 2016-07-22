import React, { Component } from 'react';
import countryApi from '../../../mockApi/countryApi';

export default class Home extends Component {
  _showCountry(country, index) {
    return <p key={index}>{country.name}</p>;
  }

  render() {
    return (
      <div>
      <div className="jumbotron">
        <h1>Countries</h1>
      </div>
      <div>
        {countryApi.all().map(this._showCountry)}
      </div>
      </div>
    );
  }
}
