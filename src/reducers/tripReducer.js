import * as types from '../actions/actionTypes';

export default function getTripReducer(state = {}, action) {
  switch (action.type) {
    case types.TRIP_FOUND:
      return action.trip;
    default:
      return state;
  }
}
