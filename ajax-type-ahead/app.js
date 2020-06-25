const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data)) // need to change this array into individual arguments '...' can spread into a function or spread into this push method and that will avoid the array of data being nested in the array of cities

console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // figure out if the city or state was searched
    const regex = new RegExp(wordToMatch, 'gi'); // g is global, i is case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi'); // finds what it matched
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // replaces that value with a highlight class
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join(); // map on matchArray will return an array, join changes from an array with multiple items into one big string
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); // this only fires off when you click out of the input, need to listen to a key up as well
searchInput.addEventListener('keyup', displayMatches);
