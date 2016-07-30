import data from './tripData';

export default {
  get: function (criteria) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let trip = data.find((elem) => {
          return elem.country === criteria.country;
        });
        resolve(trip ? trip : {});
      }, 500);
    });
  }
};
