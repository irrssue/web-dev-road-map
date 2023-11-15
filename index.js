const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let user in people) {
  console.log(people[user].toUpperCase());
  for (let i = 0; i < 10; i++) {
    console.log(`This is thrid loop ${i}`)
  }
}