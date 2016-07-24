import data from './countryData';

const _clone = function(item) {
  return JSON.parse(JSON.stringify(item));
};

export default {
  all: function () {
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_clone(data.countries));
      }, 500);
    });
  },
  filter: function (token) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const lowerCaseToken = token.toLowerCase();
          const filteredCountries = data.countries.filter(
            ({name}) => {
            return name.toLowerCase().includes(lowerCaseToken);
          });
         resolve(_clone(filteredCountries));
        }, 500);
      });
  }
};
