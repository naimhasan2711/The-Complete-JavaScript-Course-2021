'use strict';

/*
//default paramete--------------------------------------------------------------------

const bookings = [];

const bookingTicket = function (flightNumbers, numPassenger = 1, price = 199) {
  //   ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;
  const booking = {
    flightNumbers,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

bookingTicket('LH123');
bookingTicket('MB328', 72, 600);

*/

/*
//how passing arguments works: value vs reference-----------------------------------------------------

const flight = 'LH123';
const naim = {
  name: 'Naim Hasan',
  passport: 'EB016237',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH333';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'EB016237') {
    alert('Checked in');
  } else {
    alert('WRONG PASSPOSRT');
  }
};

// checkIn(flight, naim);

// console.log(flight);
// console.log(naim);

const changePassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

changePassport(naim);

checkIn(flight, naim);

console.log(flight);
console.log(naim);
*/

//firstclass and higher order function--------------------------------------------------

//first class funtions is a feature of a programming language like javascript
//where you can pass a funtion as a parameter

//higher order function is a function which can take a function as argument or
//can retrun a function and callback function is a fuction which is passed as a parameter or return

/*
//function accepting callback function--------------------------------------------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');

  return [first.toUpperCase(), ...other].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`String transformed by: ${fn.name}`);
};

transformer('Javascript is the best programming language', upperFirstWord);
transformer('Javascript is the best programming language', oneWord);
*/

/*
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');
// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

*/

/*
//The call and apply Methods--------------------------------------------------

const lufthansa = {
  airlines: 'Lufthansa',
  iatacode: 'LH',
  booking: [],
  book(fligtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airlines} flight ${this.iatacode}${fligtNum}`
    );
  },
};

lufthansa.book('123', 'Naim Hasan');
lufthansa.book('333', 'Jon Smith');
console.log(lufthansa);

const euroWings = {
  airlines: 'eurowings',
  iatacode: 'EW',
  booking: [],
};

const book = lufthansa.book;

//call method
book.call(euroWings, 23, 'Sarah Hasan');
console.log(euroWings);

book.call(lufthansa, 444, 'Mohua Hasan');
console.log(lufthansa);

//apply method
book.apply(lufthansa, [444, 'Mohua Hasan']);

*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');
// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookX = book.bind(swiss);

bookEW(777, 'Nakibul Hassan');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Naim');
bookEW23('Hasan');

//with event listener

lufthansa.planes = 300;

lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//lufthansa.buyPlanes();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write oprion number)`
//       )
//     );

//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// (function () {
//   console.log('This function will only execute once.');
// })();

// (() => {
//   console.log('This function will also only execute once.');
// })();

//closure

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger.`);
//   };
// };

// const booker = secureBooking();
