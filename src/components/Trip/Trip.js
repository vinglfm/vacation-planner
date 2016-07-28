import React, {PropTypes} from 'react';

const Trip = function({trip}) {
  return (<div>
    {trip.country ? trip.country.name : <p>Country isn't selected</p>}
    </div>
  );
};

Trip.propTypes = {
  trip: PropTypes.object.isRequired
};

export default Trip;
