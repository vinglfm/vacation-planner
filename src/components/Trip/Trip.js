import React, {PropTypes} from 'react';

import styles from './styles.module.css'

const Trip = function({trip, nextTrip}) {
  return (<div className="countryContainer_trip">
    {trip.country ? trip.country.name : <p>Country isn't selected</p>}
    </div>
  );
};

Trip.propTypes = {
  trip: PropTypes.object.isRequired,
  nextTrip: PropTypes.func.isRequired
};

export default Trip;
