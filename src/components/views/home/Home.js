import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {filterCountries} from '../../../actions/countryActions';
import {getTrip} from '../../../actions/tripActions';
import Sidebar from '../../Sidebar/Sidebar';
import TripNavigator from '../../TripNavigator/TripNavigator';

import styles from './styles.module.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onFilterChanged = this.onFilterChanged.bind(this);
    this.nextTrip = this.nextTrip.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
  }

  onFilterChanged(event) {
    this.props.filterCountries(event.target.value);
  }

  nextTrip(event) {
    console.log(event.target);
    this.props.getTrip({});
  }

  onItemClick(event) {
    const code = event.target.getAttribute('data-countryCode');
    this.props.getTrip({country:{code}});
  }

  render() {
    return (
      <div>
        <h3>Countries</h3>
        <Sidebar countries={this.props.countries} onItemClick={this.onItemClick} onFilterChanged={this.onFilterChanged}/>
        <TripNavigator trip={this.props.trip} nextTrip={this.nextTrip}/>
      </div>
    );
  }
}

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  trip: PropTypes.object.isRequired,
  filterCountries: PropTypes.func.isRequired,
  getTrip: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    countries: state.countryReducer,
    trip: state.tripReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterCountries: (token) => dispatch(filterCountries(token)),
    getTrip: (country) => dispatch(getTrip(country))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
