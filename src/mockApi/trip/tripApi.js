import data from './tripData';

export default {
  get: function (criteria) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let trip = data.find((elem) => {
          return elem.country.code === criteria.country.code;
        });

        resolve(trip ? trip : {});
      }, 500);
    });
  }
};
