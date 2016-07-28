import data from './tripData';

export default {
  get: function (countryCode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  }
};
