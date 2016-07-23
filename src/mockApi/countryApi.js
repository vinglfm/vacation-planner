import data from './countryData';

const _clone = function(item) {
  return JSON.parse(JSON.stringify(item));
};

export default {
  all: function () {
    console.log(data.countries);
    return _clone(data.countries);
  },
  filter: function (token) {
      return _clone(data.countries.filter((item) => {
        return item.localCompare(token);
      }));
  }
};
