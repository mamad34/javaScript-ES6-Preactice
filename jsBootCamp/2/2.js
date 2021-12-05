// lexial scope section and after
function outer() {
  let movieName = "blablabla";
  function inner() {
    let movieName = "the shining";
    console.log(movieName);
  }
  inner();
}
//we dont have access to inner outside of the function
outer();

const add = function (a, b) {
  console.log(a + b);
};
add(1, 1);
console.dir(add);

const zarb = function mult(a, b) {
  console.log(a * b);
};

zarb(8, 7);
// mult(8, 7); dose not work

const minus = function (a, b) {
  console.log(a - b);
};

const divide = function (a, b) {
  console.log(a / b);
};
const operations = [add, zarb, minus, divide];

for (let func of operations) {
  func(8, 5);
}

const thing = {
  doSmt: add,
};
console.log(thing.doSmt(5, 5));

function callThefunctionThreeTimes(func) {
  func();
  func();
  func();
}

function iAmSad() {
  console.log("I Am !Sad");
}

console.log(callThefunctionThreeTimes(iAmSad));

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNTimes(iAmSad, 6);

function picOneFunc(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand > 0.5) {
    return f1();
  } else {
    return f2();
  }
}

console.log(picOneFunc(iAmSad, outer));
