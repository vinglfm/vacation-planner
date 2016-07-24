import * as types from '../actions/actionTypes';

export default function loadCountriesReducer(state = [], action) {
  switch(action.type) {
    case types.COUNTRIES_LOADED:
      return action.countries;
    default:
      return state;
  }
}
