// section 11 start from here

function multiply(x, y) {
    y = typeof y === "undefined" ? 1 : y;
    return x * y;
}
// default parameter <- ->

function multiply2(
    x,
    y = 1 // y = 1 is default param
) {
    return x * y;
}

const greet = (person, greeting = "Hi") => {
    console.log(`${greeting} , ${person}`);
};

const bull = (x, y = [1, 2, 3]) => {
    console.log(x, y);
};

// spread

console.log(Math.max(1, 2, 3, 4, 5, 9, 6, 8, 6, 65, 6321, 6, 3214, 654, 321));
const nums = [45, 23, 65, 48, 98, 483, 321];
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 483

function giveMeFour(a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}
const colors = ["red", "green", "blue", "yellow"];
console.log(giveMeFour(colors)); //bad
console.log(giveMeFour(...colors)); // good spreading args to method
const str = "GOAT";
console.log(giveMeFour(...str));

// spread in array literals

const my = ["my", "hand", "is"];
const hurting = ["hurting", "and", "i"];
const am = ["am", "sad"];

const combineArray = [...my, ...hurting, ...am];

const abcd = "abcdefg".split(""); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const abcd2 = [...
    "abcdefg"
]; // ['a', 'b', 'c', 'd', 'e', 'f', 'g']