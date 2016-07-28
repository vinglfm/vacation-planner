import React, {PropTypes} from 'react';
import Trip from '../Trip/Trip';

import styles from './styles.module.css';

const TripNavigator = function({trip, nextTrip}) {
    return (<div className="navigator" onClick={nextTrip}>
        <Trip trip={trip}/>
      </div>);
};

TripNavigator.propTypes = {
  trip: PropTypes.object.isRequired,
  nextTrip: PropTypes.func.isRequired
};

export default TripNavigator;
