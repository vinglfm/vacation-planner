import * as types from './actionTypes';
import tripApi from '../mockApi/trip/tripApi';

function getTripSuccess(trip) {
  return {type: types.TRIP_FOUND, trip};
}

export function getTrip(criteria) {
  return function(dispatch) {
    return tripApi.get(criteria).then((trip) => {
      dispatch(getTripSuccess(trip));
    }).catch(error => {
      throw(error);
    });
  };
}
