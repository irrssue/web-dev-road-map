// let user = prompt("Enter something: ");

// while (true) {
//   console.log(user);
//   console.log(bot = prompt(user));
//   if (user === "quit") {
//     break;
//   }
// }

// console.log("done")

// let user;

// while (true) {
//   user = prompt("Enter something: ");
//   console.log(user);

//   if (user.toLowerCase() === "quit") {
//     break;
//   }
// }

// console.log("done");

// let maxnumber = parseInt(prompt("Enter a max number: "));
// while (!maxnumber) {
//   if (maxnumber === 0) {
//     maxnumber = parseInt(prompt("Expect 0, Enter a number: "))
//   }
//   maxnumber = parseInt(prompt("Enter a valid number: "));
// }

// const targetno = Math.floor(Math.random() * maxnumber) + 1;
// let guess = parseInt(prompt("Enter your first guess: "));
// let attamps = 1;

// while (parseInt(guess) !== targetno) {
//   if (guess === "q") {
//     attamps--;
//     console.log(`The answer was ${targetno}`);
//     console.log(`it took you ${attamps} attempts`);
//     console.log("BYE");
//     break;
//   }
//   attamps++
//   if (guess > targetno) {
//     guess = prompt("High, enter a new guess: ");
//     if (guess == targetno) {
//       console.log(`Correct! the answer was ${targetno}`);
//       console.log(`it took you ${attamps} attamps`);
//       break
//     }
//   } else {
//     guess = prompt("Low Enter a new guess: ");
//     if (guess == targetno) {
//       console.log(`Correct! the answer was ${targetno}`);
//       console.log(`it took you ${attamps} attamps`);
//       break
//     }
//   }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let value of numbers) {
//     value = value * value;
//     console.log(value);
// }

// const socre = {
//   name: "kenny",
//   age: 15,
//   howhedoing: "good",
// }

// for (let use of Object.keys(socre)) {
//   console.log(use);
// }


// let user = prompt("Enter Command");
// const todos = ["Clean the room", "Wash the car", "Wtf",];

// while (user !== "quit" && user !== "q") {
//   if (user.toLowerCase() === "list") {
//     console.log("IN LIST **********************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log("END OF LIST **********************");
//   } else if (user === "new") {
//     const newuser = prompt("What is the new todo?: ");
//     todos.push(newuser);
//     console.log(`${newuser} added to the list`);
//   } else if (user === "delete") {
//     const index = prompt("What do you want to del (add no.): ");
//     parseInt(index);
//     if (!Number.isNaN(index)) {
//       const delted = todos.splice(index, 1);
//       console.log(`Ok, delted ${delted[0]}`)
//     } else {
//       console.log("Not a number nigga wtf?")
//     }
//   }
//   user = prompt("Enter something");
// }
  
  



// console.log("********************************************");
// console.log("You out");


// function Thiswillconsoleout() {
//   console.log("ikd");
// }

// Thiswillconsoleout();
// Thiswillconsoleout();
// Thiswillconsoleout();
// Thiswillconsoleout();



// function printHeart(user) {
//   console.log("<3");
//   console.log(`Hello ${user}`)
// }

// printHeart("Tim");


// function turnThisIntoNumbers(number) {
//   console.log(`The square of it ${number * number}`);
//   console.log(`The trial of it ${number * number * number}`);
// }

// turnThisIntoNumbers(4);

// function rant(message) {
//   for (let i = 1; i < 4; i++) {
//     console.log(message.toUpperCase());
//   }
// }

// rant("I hate beets");

// function repeatThis(message, number) {
//   let result = " ";
//   for (let i = 0; i < number; i++) {
//     result += message;
//   }
//   console.log(result);
// }

// repeatThis("hi", 3);
// repeatThis("Hello", 100);

// function isSnakeEyes(no1, no2) {
//   if (no1 === 1 && no2 === 1) {
//     console.log("Snake Eyes!");
//   } else {
//     console.log("Not Snake Eyes!");
//   }
// }

// isSnakeEyes(1, 5); 

// function multiply(x, y) {
//   return x * y;
// }

// multiply(2, 3);


// function isShortsWeather(temperature) {
//   if (temperature >= 75) {
//     return true;
//   } else {
//     return false;
//   }
// }

// isShortsWeather(80);

// function lastElement(list) {
//   if (list.length === 0) {
//     return null;
//   } else {
//     return list[list.length - 1];
//   }
// };

// console.log(lastElement(3, 5, 7));


// function lastElement(arr) {
//   if (arr.length === 0) {
//     return null;
//   } else {
//     return arr[arr.length - 1];
//   }
// }

// // Test cases
// console.log(lastElement([3, 5, 7])); // Output: 7
// console.log(lastElement([1])); // Output: 1
// console.log(lastElement([])); // Output: null

// function lastElement(array) {
//   if (array.length === 0) {
//     return null
//   } else {
//     return array[array.length - 1]
//   }
// };

// console.log(lastElement([3, 5, 7]));

// function capitalize(toString) {
//   return toString[0].toUpperCase() + toString.slice(1);
// }

// console.log(capitalize("saw thura zaw"));

// function sumofarry(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum;
// }

// console.log(sumofarry([2, 3, 2]));

// function returnDay(number) {
//   let arrayOfDay = {
//     0: null,
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wedenesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday",
//   }
//   if (number >= 1 && number <= 7) {
//     return arrayOfDay[number];
//   } else {
//     return null;
//   }
  

//   while (true) {
//     console.log(`${number}`)

//     if (number === number) {
//       return numberer++;
//     }
//   }
// }

// console.log(returnDay(3))
// console.log(returnDay(0))
// console.log(returnDay(8))


// let outSideOf = 0;

// function brokindof() {
//   outSideOf = 4;
// }

// brokindof();
// console.log(outSideOf);

// const add = function (x, y) {
//   return x + y;
// }

// console.log(add(3, 5));

// const func = {
//   multiply: function (x, y) {
//     return x * y;
//   }
// }

// console.log(func.multiply(2, 4));


// const square = {
//   area: function (x) {
//     return x * x;
//   },
//   primeter: function (x) {
//     return x * 4;
//   }
// }

// console.log(square.area(10));
// console.log(square.primeter(10));

// TODO: "This" Key Word


// function thisisit() { console.log(this) };
// thisisit();

// const thisisperson = {
//   name: "Person",
//   age: 14,
//   greeting: function () {
//     console.log(`${this.name} is ${this.age} years old`);
//   }
// }

// thisisperson.greeting();

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg: function () {
//     this.eggCount++;
//     return "EGG";
//   }
// }

// console.log(hen.name);
// console.log(hen.eggCount);
// console.log(hen.layAnEgg());
// console.log(hen.layAnEgg());
// console.log(hen.eggCount);

// TODO: array methods

// const numbers = [1, 2, 3, 4, 5, 3, 2, 2, 2, 3, 2, 3,];

// numbers.forEach(function (no) {
//   console.log(no  * no);
// })

// const number = [1, 1, 2, 3, 2, 3, 2, 3, 2, 21,];

// console.log(number.map(function (num) {
//   return num;
// }));


// const number = [1, 2, 1, 2, 13, 1, 3, 1,];

// for (let i in number) {
//   console.log(number[i] * 2);
// }

// const number = [
//   "This is pretty shit"
// ]

// const tobe = (number.map(function (x) {
//   return x.toUpperCase();
// }))


// console.log(tobe);


// const lists = [
//   {
//     title: "Hello",
//     is: true,
//   },
//   {
//     title: "what is this",
//     is: false,
//   }
// ]


// const user = lists.map(function (list) {
//   return list.title.toUpperCase();
// })

// console.log(user);

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

const firstNames = fullNames.map(name => name.first);

console.log(firstNames);