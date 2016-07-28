import * as types from './actionTypes';
import countryApi from '../mockApi/country/countryApi';

function loadCountriesSuccess(countries) {
  return {type: types.COUNTRIES_LOADED, countries};
}

export function loadCountries() {
  return function(dispatch) {
    return countryApi.all().then(countries => {
      dispatch(loadCountriesSuccess(countries));
    }).catch(error => {
      throw(error);
    });
  };
}

export function filterCountries(filterToken) {
    return loadCountriesSuccess(countryApi.filter(filterToken));
}
