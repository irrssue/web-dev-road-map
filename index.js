const code = 100;
let user = prompt("");

while (code != user) {
  console.log("Wrong Enter again");
  console.log(user = prompt(""));
}

console.log("Congract");