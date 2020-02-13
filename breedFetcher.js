const request = require('request');
const inputBreed = process.argv.slice(2);
const targetUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + inputBreed;

request(targetUrl, (error, response, body) => {
  if (error) {
    return console.log('ERROR: ', error);
  }
  const data = JSON.parse(body);

  if (!data[0]) {
    return console.log("dat's not a cat we gots");
  }
  console.log(data[0].description);
});

