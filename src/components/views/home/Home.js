import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {filterCountries} from '../../../actions/countryActions';
import {getTrip} from '../../../actions/tripActions';
import {selectItem} from '../../../actions/sidebarActions';
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
    this.props.getTrip({});
  }

  onItemClick(event) {
    const index = parseInt(event.target.getAttribute('data-index'));
    this.props.selectItem(index);

    const code = event.target.getAttribute('data-countryCode');
    this.props.getTrip({country:{code}});
  }

  render() {
    return (
      <div>
        <h3>Countries</h3>
        <Sidebar countries={this.props.countries} onItemClick={this.onItemClick} onFilterChanged={this.onFilterChanged} selected={this.props.selectedSidebarIndex}/>
        <TripNavigator trip={this.props.trip} nextTrip={this.nextTrip}/>
      </div>
    );
  }
}

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  trip: PropTypes.object.isRequired,
  filterCountries: PropTypes.func.isRequired,
  getTrip: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    countries: state.countryReducer,
    trip: state.tripReducer,
    selectedSidebarIndex: state.sidebarReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterCountries: (token) => dispatch(filterCountries(token)),
    getTrip: (country) => dispatch(getTrip(country)),
    selectItem: (index) => dispatch(selectItem(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
