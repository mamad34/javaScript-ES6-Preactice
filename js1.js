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

// start Map

/*

var number = [0, 1, 2, 3, 4, 5, 6];

var otherArray = [];

for (i = 0; i < number.length; i++) {
  otherArray.push(number[i] * 10);
}
console.log(otherArray);
 */

const numbers = [0, 1, 2, 3, 4, 5];

const otherArray = numbers.map(function (num) {
  return num * 10;
});
console.log(otherArray);
// map 2
const users = [
  { user: "mamad", age: "22", eyes: "brown" },
  { user: "mamad2", age: "23", eyes: "brown2" },
  { user: "mamad3", age: "24", eyes: "brown3" },
];

const listOfUsers = users.map(function (item) {
  return item.user;
});
console.log(listOfUsers);

//filter helper start

const products = [
  { name: "ipad", category: "tech" },
  { name: "sony", category: "tech2" },
  { name: "iphone", category: "tech3" },
  { name: "imac", category: "tech4" },
];

const result = products.filter(function (item) {
  return item.category === "tech3";
});
//OR
const result2 = products.filter(function (item2) {
  if (item2.name === "ipad") {
    return true;
  } else false;
});
console.log(result);
console.log(result2);

//start find

const brands = [
  { name: "apple", id: 1 },
  { name: "HP", id: 2 },
  { name: "samsung", id: 3 },
  { name: "samsung", id: 4 },
];

const result26 = brands.find(function (item) {
  return item.name === "samsung";
});

console.log(result26);

//every some helper

const students = [
  { name1: "Francis", grade: 4 },
  { name1: "Martin", grade: 5 },
  { name1: "daus", grade: 7 },
];
/*
let allStudentsPassTheCourse = false;

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  if (student.grade < 6) {
    allStudentsPassTheCourse = false;
    break;
  } else {
    allStudentsPassTheCourse = true;
  }
}
*/

let allStudentsPassTheCourse = students.every(function (stdn) {
  return stdn.grade >= 6;
});

console.log(allStudentsPassTheCourse);

// reduce Helper

const previous = 200;
const current = [
  { expense: "Guitar", amount: 200 },
  { expense: "Mic", amount: 100 },
  { expense: "Strap", amount: 150 },
];

const result22 = current.reduce(function (sum, expense) {
  return sum + expense.amount;
}, 0);

console.log(result22);

const users2 = [
  { name2: "francis", lastname: "norton", age: 25 },
  { name2: "Martha", lastname: "norton", age: 25 },
  { name2: "rob", lastname: "norton", age: 25 },
];

const name22 = users2.reduce(function (start, user) {
  start.push(user.name2);
}, []);

// start for of

const names60 = ["jane", "thomas", "james"];

for (let name of names60) {
  console.log(name);
}

const numberss = [10, 20, 30, 40, 50];
let totalll = 0;

for (let number of numberss) {
  total += number;
}

console.log(totalll);
// end
