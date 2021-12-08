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

//forEach

const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28];

numbers.forEach(function(num) {
    console.log(num);
});

function printDouble(x) {
    console.log(x * 2);
}
numbers.forEach(printDouble);

numbers.forEach(function(number, index) {
    console.log(index, number);
});

// map

const doubles = numbers.map(function(num) {
    return num * 2; // map need return
});

const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0,
    };
});

const words = ["asap", "byob", "rsvp", "diy"];
const splitAndJoined = words.map(function(word) {
    return word.toUpperCase().split("").join(".");
});

// Arrow functions

const square = (x) => {
    return x * x;
};

//or
// const square2 = x => {
//     return x * x;
// };

const multiply = (x, y) => {
    return x * y;
};

const homYea = () => {
    console.log("HOOOOOM YEAAAAA");
};

// this type of arrow functions dose not need to use return keyword

//  const twoSome = (n) => (
//     n * 2;
//     )
const twoSome = (n) => n * 2;

const flouts = [1.1, 2.2, 33.3, 4.4, 2.6, 68.9];

const newFlouts = flouts.map((n) => {
    return n / 2;
});

const newFlouts2 = flouts.map((n) => n * 3);

const evenOrOdd = flouts.map((n) => (n % 2 === 0 ? "even" : "odd"));

// Array find

let films = ["ha ye", "ho yea ", " ha no  ", "ho no"];

const film = films.find((movie) => {
    return movie.includes("ha");
});

const film2 = films.find((m) => m.indexOf("ha") === 0);
const film3 = films.find((m) => m.indexOf("ha") === 1);

const bookRating = [1.2, 3.4, 6.6, 8.8, 9.9, 7.6, 4.2, 1.2];

const rates = bookRating.filter((b) => b > 6.6);

//Array Filter