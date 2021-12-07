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

const add = function(a, b) {
    console.log(a + b);
};
add(1, 1);
console.dir(add);

const zarb = function mult(a, b) {
    console.log(a * b);
};

zarb(8, 7);
// mult(8, 7); dose not work

const minus = function(a, b) {
    console.log(a - b);
};

const divide = function(a, b) {
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

function multiplyBy(num) {
    return function() {
        console.log("HI!");
    };
}
console.log(multiplyBy());
const mystery = multiplyBy();
console.log(mystery()); // prints HI

////////////////////////

function multiplyBye(num) {
    return function(x) {
        return x * num;
    };
}

const triple = multiplyBye(3);
console.log(triple);
console.log(triple(6));
//
const double = multiplyBye(2);
console.log(double(6));
//
const halfIt = multiplyBye(0.5);
console.log(halfIt(5));

//////////////////////////

function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num <= y;
    };
}
const isChild = makeBetweenFunc(0, 18);
console.log(isChild(8));
console.log(isChild(88));

// CallBack functions

function shout() {
    console.log("this is alert after 3 seconds");
}
setTimeout(shout, 3000);

function alertOnBtn() {
    alert("button clicked");
}
const btn = document.querySelector("button");
btn.addEventListener("click", alertOnBtn);

// hoisting

console.log(hoistedVar);
var hoistedVar = "Oh Yea"; // no Error

// console.log(hoistedLet);
// let hoistedLet = "Ah Yea"; // Error

dodoriDoDo();
// it works ether behind
function dodoriDoDo() {
    console.log("DoDori Do Do");
}

// hoot(); if it run it will contain an Error
console.log(hoot); // undefined
var hoot = function() {
    console.log("HOOO HOOOOO");
};