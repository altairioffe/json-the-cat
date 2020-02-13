const request = require('request');

const fetchBreedDescription = function(inputBreed, cb) {

  const targetUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + inputBreed;
  request(targetUrl, (error, response, body) => {

    const data = JSON.parse(body);
    let result;
    if (!data[0]) {
      result = "dat's not a cat we gots";
    } else {
      result = data[0].description;
    }
    cb(error, result);
  });
};

module.exports = { fetchBreedDescription };