'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////
/*
console.log(
  '-------------------------------------our first ajax call-----------------------------------------------'
);

const getCounrtyData = function (country) {
  //first step of ajax call
  const request = new XMLHttpRequest();
  //get method to request
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  //send api request
  request.send();

  //asynchronous call
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCounrtyData('bangladesh');

getCounrtyData('germany');

getCounrtyData('japan');

*/
/*
console.log(
  '-------------------------------------our first ajax call-----------------------------------------------'
);
*/

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country  ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*

const getCounrtyAndNeighbour = function (country) {
  //first step of ajax call country 1
  const request = new XMLHttpRequest();
  //get method to request
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  //send api request
  request.send();

  //asynchronous call
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render country 1
    renderCountry(data);

    //get neighbour country
    const [neighbour] = data.borders;
    console.log(neighbour);
    if (!neighbour) return;

    //first step of ajax call country 2
    const request2 = new XMLHttpRequest();
    //get method to request
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    //send api request
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCounrtyAndNeighbour('bangladesh');
*/

console.log(
  '-------------------------------------promises and the fetch api-----------------------------------------------'
);

//  THIS IS THE OLD WAY OF AJAX CALL, BELWO IS THE MODERN WAY OF AJAX CALL WITH FETCH
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.eu/rest/v2/name/bangladesh');
// console.log(request);

console.log(
  '-------------------------------------consuming promises-----------------------------------------------'
);

// const getCountry = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

const getCountry = function (country) {
  //country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      //country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};

getCountry('germany');
