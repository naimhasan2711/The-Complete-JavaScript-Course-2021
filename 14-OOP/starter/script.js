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
/*
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
*/

console.log('--------------------------- ES6 CLASSES-------------------------');

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //method will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}.`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const sarah = new PersonCl('Sarah Hasan', 2019);
console.log(sarah);

const walter = new PersonCl('Walter', 1966);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}.`);
// };

sarah.greet();
console.log(sarah.age);

// 1. Classes are not hoisted
// 2. Classes are first class citizen
// 3. Classes are executed in strick mode

console.log('----------getters and setters--------------');

const account = {
  owner: 'naim',
  movements: [25, 20, 35, 50, 200, 150],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account);

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
