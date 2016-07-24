import * as types from './actionTypes';
import countryApi from '../mockApi/countryApi';

function loadCountriesSuccess(countries) {
  return {type: types.COUNTRIES_LOADED, countries};
}

export function loadCountries() {
  // return function(dispatch) {
  //   return countryApi.all().then(countries => {
  //     dispatch(loadCountriesSuccess(countries));
  //   }).catch(error => {
  //     throw(error);
  //   });
  return loadCountriesSuccess(countryApi.all());
  // };
}

export function filterCountries(filterToken) {
  // return function(dispatch, filterToken) {
  //   return countryApi.filter(filterToken).then(countries =>{
  //     dispatch(loadCountriesSuccess(countries));
  //   }).catch(error => {
  //     throw(error);
  //   });
  return loadCountriesSuccess(countryApi.filter(filterToken));
  // };
}
