'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, ind) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      ind + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>

    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserName = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  });
};

createUserName(accounts);

const updateUI = cA => {
  //display movements
  displayMovements(cA.movements);
  //display balance
  calculateDisplayBalance(cA);
  //display summery
  calculateDisplaysummery(cA);
};

const calculateDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((ac, val) => {
    return ac + val;
  }, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

const calculateDisplaysummery = acc => {
  const income = acc.movements
    .filter(val => val > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${income} €`;

  const outcome = acc.movements
    .filter(val => val < 0)
    .reduce((acc, val) => acc + val, 0);

  labelSumOut.textContent = `${Math.abs(outcome)} €`;

  const interest = acc.movements
    .filter(val => val > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = `${interest} €`;
};

//login event handler

let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //display ui and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recevierAccount = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    recevierAccount &&
    currentAccount.balance >= amount &&
    recevierAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    recevierAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //slice
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2)); // slice array from index 2 to last

// console.log(arr.slice(2, 4)); //also can include start index and end index

// console.log(arr.slice(-2)); // can include negative index then will iterates from tail

// console.log(arr.slice(-1)); //get the last element of array

// //splice method
// // fundamental different between slice and splice method is that, slice does not mutate the array
// // but splice does mutate the array.

// // console.log(arr.splice(2));
// // console.log(arr);

// //arr.splice(startIndex, countDeletion);
// arr.splice(1, 2);
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// //REVERSE

// let arr2 = ['j', 'i', 'c', 'z', 'b'];

// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2); //reverse mutates the array

// //concat
// //used to concat two arrays

// let letters = arr.concat(arr2); //using concat method,concat does not mutate original method
// console.log(letters);

// console.log([...arr, ...arr2]); //using array destructuring

// //JOIN METHOD

// console.log(letters.join(', '));
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------------------------------------');

// movements.forEach((movement, index, array) => {
//   if (movement > 0) {
//     console.log(`Movement ${index}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
//   }
// });

//-----------------------------challenge-1-----------------------------

// const checkdogs = function (dogsJuila, dogsKate) {
//   const juilaCorrectedDogs = dogsJuila.slice();
//   juilaCorrectedDogs.splice(0, 1);
//   juilaCorrectedDogs.splice(-2);

//   const dogs = juilaCorrectedDogs.concat(dogsKate);

//   dogs.forEach((dog, ind) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${ind + 1} is an adult and is ${dog} years old.`);
//     } else {
//       console.log(
//         `Dog number ${ind + 1} is still a puppy and is ${dog} years old.`
//       );
//     }
//   });
// };

// checkdogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const EuroToUSD = 1.1;

// const movementsUSD = movements.map(mov => Math.ceil(mov * EuroToUSD));
// console.log(movements);
// console.log(movementsUSD);

// const deposit = movements.filter(val => val > 0);
// const withdrawal = movements.filter(val => val < 0);

// console.log(movements);

// const balance = movements.reduce((acc, val, ind, arr) => {
//   console.log(`Iteration ${ind}: Accumulator ${acc}`);
//   return acc + val;
// }, 0);

// console.log(balance);

// const maxValue = movements.reduce((acc, val) => {
//   if (acc > val) {
//     return acc;
//   } else {
//     return val;
//   }
// }, movements[0]);

// console.log(maxValue);

// const minValue = movements.reduce((acc, val) => {
//   if (acc < val) {
//     return acc;
//   } else {
//     return val;
//   }
// }, movements[0]);

// console.log(minValue);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(val => val < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(val => val.owner === 'Steven Thomas Williams');
// console.log(account);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // console.log(movements);
// // console.log(movements.includes(-130));

// // const anyDeposite = movements.some(mov => mov > 5000);
// // console.log(anyDeposite);

// // const arr = [1, [2, 3, 4], [5, 6, 7], 8, 9, 10];
// // console.log(arr);

// // console.log(arr.flat());

// // const deepArr = [1, [[2, 3], 4], [5, [6, 7]], 8, 9, 10];
// // console.log(deepArr);
// // console.log(deepArr.flat(2));

// // const overallMovements = accounts
// //   .map(acc => acc.movements)
// //   .flat()
// //   .reduce((acc, mov) => acc + mov, 0);
// // console.log(overallMovements);

// // //flatmap
// // const overallMovements2 = accounts
// //   .flatMap(acc => acc.movements)
// //   .reduce((acc, mov) => acc + mov, 0);
// // console.log(overallMovements2);

// // const owner = ['Jonas', 'Zack', 'Adam', 'Martha'];
// // //console.log(owner);
// // console.log(owner.sort());
// // console.log(owner);

// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// // console.log(movements);

// const x = Array.from({ length: 7 }, () => 1);
// console.log(x);

// const y = Array.from({ length: 7 }, (_, ind) => ind + 1);
// console.log(y);

// const dice = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * 6) + 1
// );
// console.log(dice);
const overallDeposite = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(accounts.map(acc => acc.movements).flat());
console.log(
  accounts
    .map(acc => acc.movements)
    .flat()
    .filter(mov => mov > 0)
);
console.log(overallDeposite);

const numDeposite100 = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 1000).length;
console.log(numDeposite100);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      // cur > 0 ? (sum.deposite += cur) : (sum.withdraw += cur);
      sum[cur > 0 ? 'deposite' : 'withdraw'] += cur;
      return sum;
    },
    { deposite: 0, withdraw: 0 }
  );

console.log(sums);
