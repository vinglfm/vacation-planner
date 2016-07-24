import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {filterCountries} from '../../../actions/countryActions';
import Sidebar from '../../Sidebar/Sidebar';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  onFilterChanged(event) {
    this.props.filterCountries(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Countries</h1>
        </div>
        <Sidebar countries={this.props.countries} onFilterChanged={this.onFilterChanged}/>
      </div>
    );
  }
}

Home.propTypes = {
  countries: PropTypes.array.isRequired,
  filterCountries: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    countries: state.countryReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterCountries: (token) => dispatch(filterCountries(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
