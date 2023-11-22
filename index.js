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

const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let value of numbers) {
    value = value * value;
    console.log(value);
}