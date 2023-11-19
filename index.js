let user = Math.floor(Math.random() * 10);
let targetguess = Math.floor(Math.random() * 10);

while (true) {
  guess = Math.floor(Math.random() * 10);
  if (guess === targetguess) {
    console.log(`Correct The guess number was ${guess}`)
    break;
  }
}