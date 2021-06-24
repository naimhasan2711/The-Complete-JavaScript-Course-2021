/*jshint esversion: 6 */
'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(startetIndex, mainIndex) {
    return [this.starterMenu[startetIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  delivery: function ({ startedIndex, mainIndex, time, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will deliver to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

/*
//--------------------------------Array Destructuring - 1------------------------------------------//

const arr = [1, 2, 3];

//old way

let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log(a, b, c);

//modern way
const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;

console.log(main, secondary);

//swap value in old way

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

//modern way

[main, secondary] = [secondary, main];

console.log(main, secondary);
const [starter, mainer] = restaurant.order(2, 0);
console.log(starter, mainer);

//nested destrucuring
const nested = [1, 2, [3, 4]];
const [aa, , [bb, cc]] = nested;
console.log(aa, bb, cc);

//default values

const [p = 1, q = 1, r = 1] = [4];
console.log(p, q, r);
*/

/*
//--------------------------------Object Destructuring - 2------------------------------------------//

const { name, categories, mainMenu } = restaurant;

console.log(name, categories, mainMenu);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default values
const { menu = [], mainMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating object
let a = 111;
let b = 222;

const obj = { a: 23, b: 47, c: 76 };

({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = hours;

console.log(o, c);

restaurant.delivery({
  time: '12:30',
  address: 'Savar, Dhaka',
  quantity: 2,
  mainIndex: 1,
  startedIndex: 0,
});
*/

/*
//-------------------------------- The Spread operator(...) ------------------------------------------//

const arr = [7, 8, 9];
const newBadArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(newBadArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnooci'];
console.log(newMenu);

//copy array

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...mainMenuCopy, ...restaurant.starterMenu];

console.log(menu);

const str = 'naim';
const letter = [...str, ' ', 's'];
console.log(letter);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta. Ingredients1? "),
//   prompt('Ingredient2?'),
//   prompt('Ingredient3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

const newRestaurant = {
  foundingYear: 1993,
  ...restaurant,
  founder: 'Naim Hasan',
};
console.log(newRestaurant);
*/
/*
//-------------------------------- REST pattern and Parameter------------------------------------------//

//spread because right side
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//rest because left side

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rizato, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rizato, otherFood);

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6);

const x = [2, 3, 1, 4, 5, 1, 3];

add(...x);
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//-------------------------------- coding challenge -1 ------------------------------------------//
//task-1
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

//task-2
const [gk, ...fieldPlayer] = player1;
console.log(fieldPlayer);
console.log(gk);

//task-3
const allPlayer = [...player1, ...player2];
console.log(allPlayer);

//task-4
const playersFinal = [...player1, 'thiago', 'Coutinho', 'perisic'];
console.log(playersFinal);

//task-5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//task-6
const printGoals = function (...pl) {
  console.log(`${pl.length} goals were conceded.`);
};

printGoals(...game.scored);

//task-7

team1 > team2 && console.log('Team2 is more likely to win.');

team1 < team2 && console.log('Team1 is more likely to win.');
*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [index, value] of menu.entries()) {
//   console.log(`${index} : ${value}`);
// }

/*
//-------------------------------- optional chaininging ------------------------------------------//
const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? 'method does not exists.');
*/
/*
//-------------------------------- coding challenge -1 ------------------------------------------//
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An evenet happens, on average every ${
    [...gameEvents.keys()].pop() / gameEvents.size
  } minutes.`
);

//4
for (const [key, val] of gameEvents) {
  const half = key <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${half}] ${key}: ${val}`);
}
*/
/*
//-------------------------------- WORKING WITH STRINGS PART-1 ------------------------------------------//
const airline = 'Bangladesh Air lines';
const plane = 'Boaing777';

console.log(plane[0]);

console.log('A350'[0]);
console.log('abcsd'.length);

console.log(airline.indexOf('s'));
console.log(airline.lastIndexOf('s'));

console.log(airline.indexOf('air'));

console.log(airline.slice(11));
console.log(airline.slice(11, 14));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat

  const check = seat.slice(-1);

  if (check === 'B' || check === 'E') {
    console.log('You are in middle seat');
  } else {
    console.log('you got lucky');
  }
};

checkMiddleSeat('23B');
checkMiddleSeat('11C');
checkMiddleSeat('40E');
checkMiddleSeat('2A');
*/

/*
//-------------------------------- WORKING WITH STRINGS PART-2 ------------------------------------------//

const airline = 'Tap air portugal';

console.log(airline.toLowerCase());
console.log(airline.toLocaleUpperCase());

const name = 'jOnAs';

const toLowerName = name.toLowerCase();

const capital = toLowerName[0].toLocaleUpperCase() + toLowerName.slice(1);
console.log(name, capital);

const lowerEmail = 'naimhasa@gmail.com';

const loginEmail = ' NaimHasan@gmail.com \n';

const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizeEmail);

const priceE = '298,95£';
const priceU = priceE.replace('£', '$').replace(',', '.');

console.log(priceU);

const p = 'All passenger come to door 23, door 23!';

console.log(p.replace('door', 'gate'));
console.log(p.replaceAll('door', 'gate'));

const plane = 'Air 320neo';

console.log(plane.includes('320'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Aib'));
console.log(plane.endsWith('neo'));
console.log(plane.endsWith('noe'));


*/
/*
//-------------------------------- WORKING WITH STRINGS PART-3 ------------------------------------------//

//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Naim Hasan'.split(' '));

const [fistName, lastName] = 'Naim Hasan'.split(' ');

const newName = ['Mr.', fistName, lastName].join(' ');
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    //nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(nameUpper.join(' '));
};

capitalizedName('naim hasan');
capitalizedName('sarah mou and naim');

//padding

const message = 'Temrinal 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Naim'.padStart(25, '-'));
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     //console.log(`${first}${second[0].toUpperCase() + second.slice(1)}`);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
//   }
// });

// const array = [1, 2, 3, 4, 5];

// array.forEach((item, index, arr) => {
//   console.log(`Index ${index}: ${item}`);
// });

// let sum = 0;

// array.forEach(item => {
//   sum += item;

//   //console.log(sum);
// });

// console.log(sum);

const letters = ['a', 'b', 'c', 'd', 'b', 'a', 'a'];
//console.log(typeof letters);

const count = {};

letters.forEach(item => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);
