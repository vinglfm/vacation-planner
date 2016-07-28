import * as types from './actionTypes';
import tripApi from '../mockApi/trip/tripApi';

function getTripSuccess(trip) {
  return {type: types.TRIP_FOUND, trip};
}

export function getTrip(country) {
  return function(dispatch) {
    return tripApi.get(country).then((trip) => {
      dispatch(getTripSuccess(trip));
    }).catch(error => {
      throw(error);
    });
  };
}
