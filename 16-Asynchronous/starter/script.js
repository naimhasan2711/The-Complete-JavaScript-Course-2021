'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderErrorMessage = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

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

/*
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

const getJson = function (url, errorMessage = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
  });
};

// const getCountry = function (country) {
//   //country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found! ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //const neighbour = data[0].borders[0];
//       const neighbour = 'sdsds';
//       if (!neighbour) return;
//       //country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found! ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(error => {
//       console.error(`${error}`);
//       renderErrorMessage(`Something went wrong ${error.message}. Try again!.`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountry = function (country) {
  getJson(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found!'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('Neighbour not found!');
      //country 2
      return getJson(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.error(`${error}`);
      renderErrorMessage(`Something went wrong ${error.message}. Try again!.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountry('portugal');
  btn.style.opacity = 0;
});

getCountry('australia');


*/

/*

console.log(
  '------------------------------------- coding challenge-1 -----------------------------------------------'
);

const whereIAm = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found! ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};
//whereIAm(52.508, 13.816);
whereIAm(46.9547658, 7.3248296);

*/
/*
console.log(
  '------------------------------------- event loop in practice -----------------------------------------------'
);

console.log('Test Start');

setTimeout(() => console.log('0 second timer'), 0);
Promise.resolve('resolve promises 1').then(res => console.log(res));
Promise.resolve('resolve promises 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});

console.log('Test End');

*/
/*
console.log(
  '------------------------------------- make our own promise-----------------------------------------------'
);

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening🔮`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You won💵`);
    } else {
      reject(new Error(`You lost your money💩`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setInterval(resolve, 1000 * seconds);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 5 seconds');
    return wait(1);
  });

  */
/*
console.log(
  '------------------------------------- promisifying geolocation api-----------------------------------------------'
);

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

console.log('getting current position!');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//getPosition().then(pos => console.log(pos));

const whereIAm = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found! ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};

btn.addEventListener('click', whereIAm);
*/

console.log(
  '------------------------------------- consuming promises with async/wait-----------------------------------------------'
);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
// console.log(`1: first`);
// // const cn = whereIAm();
// // console.log(cn);
// whereIAm()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.log(`2: ${err.message}`));
// console.log('2: second');

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();
/*
console.log(
  '------------------------------------- running promises in parallel-----------------------------------------------'
);
// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c1}`
    );
    const [data2] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c2}`
    );
    const [data3] = await getJSON(
      `https://restcountries.eu/rest/v2/name/${c3}`
    );
    console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('bangladesh', 'germany', 'japan');
*/

///////////////////////////////////////
// Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
