import React, {PropTypes} from 'react';

import styles from './styles.module.css';

const Trip = function({trip, nextTrip}) {
  const img = require("../../images/andorra.svg");
  return (<div className="countryContainer_trip">
    {trip.country ? trip.country.name : <p>Country isn't selected</p>}
    <img className="countryContainer_trip_image" src={img} alt="country map"/>
    </div>
  );
};

Trip.propTypes = {
  trip: PropTypes.object.isRequired,
  nextTrip: PropTypes.func.isRequired
};

export default Trip;
