'use strict';

/*
const Person = function (firstName, birthYear) {
  //instance property
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   never do this
  //   this.calcAge = function(){
  //       console.log(2037-this.birthYear);
  //   };
};

const naim = new Person('Naim', 1993);
console.log(naim);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const sarah = new Person('Sarah', 2019);
const ayat = new Person('Ayat', 2021);

console.log(sarah, ayat);
console.log(naim instanceof Person);

////prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
};

naim.calcAge();
sarah.calcAge();
ayat.calcAge();

console.log(naim.__proto__);
console.log(naim.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(naim));
console.log(Person.prototype.isPrototypeOf(ayat));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(naim, ayat);

console.log(naim.hasOwnProperty('firstName'));
console.log(naim.hasOwnProperty('species'));

console.log(naim.__proto__);
console.log(naim.__proto__.__proto__);
console.log(naim.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 6, 1, 2];

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

console.log(
  '--------------------------- coding challenge 1-------------------------'
);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const Marcedez = new Car('Marcedez', 95);

console.log(BMW, Marcedez);

BMW.accelerate();
BMW.accelerate();

BMW.brake();

Marcedez.accelerate();

Marcedez.brake();
Marcedez.brake();
