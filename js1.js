//back ticks and objects and ....
function employee() {
  const name = "harry";
  const age = 21;
  const position = "manager";
  console.log(`${name} is ${age} and his positon is ${position}`);
}

const names = ["first", "second", "third"];

const jsVariableCar = {
  gearbox: "manual",
  cc: "1600cc",
};

console.log(`the name of first array is ${names[0]}`);
console.log(`5+1 is  ${5 + 1}`);
console.log(
  `js object car cc is  ${jsVariableCar.cc} and gearbox is : ${jsVariableCar.gearbox}`
);

// for each

const artists = ["clapton", "metallica", "gunsnroses", "us"];

artists.forEach(function (item) {
  console.log(item);
});

var purchases = [
  { quantitiy: 2, amount: 100 },
  { quantitiy: 5, amount: 120 },
  { quantitiy: 5, amount: 120 },
];

var total = 0;
/*
for (i = 0; i < purchases.length; i++) {
  total += purchases[i].quantitiy * purchases[i].amount;
}
*/

purchases.forEach(function (item) {
  total = item.amount * item.quantitiy;
});

console.log(total);
