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
/*
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
  static hey() {
    console.log('Hey there..');
    console.log(this);
  }
}

const sarah = new PersonCl('Sarah Hasan', 2019);
console.log(sarah);

PersonCl.hey();

//const walter = new PersonCl('Walter', 1966);

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

console.log('----------Object.create()--------------');

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1988;
steven.calcAge();

const ayat = Object.create(PersonProto);
ayat.init('Ayat', 2021);
ayat.calcAge();
*/
/*
console.log(
  '--------------------------- coding challenge 2-------------------------'
);

class Car {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Speed after acceleration is ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Spped after brake is ${this.speed} km/h`);
  }
  get sppedUS() {
    return this.speed / 1.6;
  }

  set sppedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);

console.log(ford);

console.log(ford.sppedUS);

ford.accelerate();
ford.accelerate();

console.log(ford);

ford.brake();
console.log(ford);

ford.sppedUS = 50;

console.log(ford);

*/
/*
console.log(
  '--------------------------- Inheritense between classes-------------------------'
);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
};

const mike = new Student('Naim', 1993, 'CSE');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);


*/
/*
console.log(
  '--------------------------- coding challenge 3-------------------------'
);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The car is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The car is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `The car is going at ${this.speed} km/h and charge is ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();

*/
/*
console.log(
  '--------------------------- ES6 inheritese-------------------------'
);

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
  static hey() {
    console.log('Hey there..');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always this need to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I'm studying ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old.`);
  }
}

const sarah = new StudentCl('Sarah Hasan', 2019, 'Artificial Intelligence');

console.log(sarah);
sarah.introduce();
sarah.calcAge();
sarah.greet();
*/
/*
console.log(
  '--------------------------- Object.create() inheritese-------------------------'
);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I'm studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 1986, 'CSE');
jay.introduce();
jay.calcAge();
*/

console.log(
  '--------------------------- Object.create() inheritese-------------------------'
);

class Account {
  //public fileds
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for openning an account, ${this.owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  //public interface
  deposite(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }

  //private method
  #approavLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approavLoan(val)) {
      this.deposite(val);
      console.log('Loan approaved');
    }
  }
  static helper() {
    console.log('Helper');
  }
}

const account1 = new Account('Niam', 'BDT', 1111);

account1.deposite(200);
account1.deposite(150);
account1.requestLoan(1000);

console.log(account1);

console.log(account1.getMovements());

Account.helper();
