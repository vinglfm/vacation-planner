import React from 'react';
import countryApi from '../../../mockApi/countryApi';
import Sidebar from '../../Sidebar/Sidebar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }

    this.onFilterChanged = this.onFilterChanged.bind(this);
  }
  componentWillMount() {
    this.setState({countries: countryApi.all()});
  }
  onFilterChanged(event) {
    this.setState({countries: countryApi.filter(event.target.value)});
  }
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Countries</h1>
        </div>
        <Sidebar countries={this.state.countries} onFilterChanged={this.onFilterChanged}/>
      </div>
    );
  }
}
