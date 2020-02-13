const { fetchBreedDescription } = require('./breedFetcher');

const inputBreed = process.argv.slice(2);

fetchBreedDescription(inputBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});