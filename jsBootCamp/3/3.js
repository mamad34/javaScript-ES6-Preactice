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

const feline = {
    legs: 4,
    family: "Feliae",
};

const caninae = {
    family: "Caninae",
    furry: "true",
    legs: 4,
};

const dog = {
    ...caninae,
    isPet: true,
    adorable: true,
};

const houseCat = {
    ...feline,
    isGrumpy: true,
    pesonality: "unpredictable",
};

const catDog = {
    ...feline,
    ...caninae,
};

// catDog
// {legs: 4, family: 'Caninae', furry: 'true'}

const tripod = {
    ...caninae,
    legs: 3,
};

// tripod
// {family: 'Caninae', furry: 'true', legs: 3}

const tripod2 = {
    legs: 3,
    ...caninae,
};

// tripod2
// {legs: 4, family: 'Caninae', furry: 'true'}

const catDogClone = {
    ...catDog,
};

console.log(catDog === catDogClone);

// console.log([...dog]); TypeError: dog is not iterable

console.log({...[4, 5, 6] });
console.log({... "abcdefg" });

const random = [...
    "hello", {...catDog }
];
console.log(random);
console.log(Math.max(...[3, 4, 5, 6, 7]));

// the argument object
// use this for multiple inputs in function // this is not good !

function sum() {
    console.log(arguments);
}
sum(1, 2, 3, 6, 7, 23, 45, 6);

function sumAll() {
    const argsArray = [...arguments];
    return argsArray.reduce((total, currentVal) => {
        return total + currentVal;
    });
}

console.log(sumAll(1, 5, 6, 8, 33, 6));

function fullName(first, last) {
    console.log(arguments);
    console.log(first);
}
fullName("apple", "orange", "dil22", "sibil");

const multiArrow = () => {
    console.log(arguments);
}; // Arrow Functions dose not support arguments

// REST parameter

function restSum(...nums) {
    console.log(nums);
    return nums.reduce((total, currVal) => {
        return total + currVal;
    });
}
console.log(restSum(5, 5, 5, 5)); //returns an actual array

//...titles (REST parameter) should be at the last of arguments
function fullName2(first, last, ...titles) {
    console.log("first", first);
    console.log("last", last);
    console.log("titles", titles);
}
fullName2("mamad", "gholi", "III", "HOYEA");

const arrowMultRest = (...nums) => {
    return nums.reduce((total, currVal) => {
        return total * currVal;
    });
};

// DESTRUCTURING

const raceResults = ["ebi golaby", "hamed sisi", "mk", "mamad", "dididodo"];
// simple way to call theme
// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

// DESTRUCTURING way
const [gold, silver, bronze] = raceResults;

console.log(gold, silver, bronze);

const [first, , , fourth] = raceResults;

console.log(fourth);

const [winner, , ...others] = raceResults;

// DESTRUCTURING OBJECTS

const runner = {
    firstName: "elay",
    lastName: "pilay",
    country: "silay",
    title: "elay eat pilay and kiss silay",
};

const { firstName, lastName, time } = runner;

console.log(firstName, time);

const { country: nation, title: honerific } = runner; // key is now nation & for call country we call nation

console.log(nation, honerific);

const alRunner = {
    alFirst: "dil",
    alLast: "bil",
    keshvar: "moroco",
    altitle: "this is soome title and it shoule be fixed",
};

const { alFirst, alLast, ...other } = alRunner;

console.log(alFirst, alLast, other);

//NESTED DESTRUCTUING

const alResults = [
    { dfirst: "elid", dlast: "koiweqkr", country: "kenya" },
    { dfirst: "nameeqr", dlast: "qwrkrqwe", country: "wqeqe" },
    { dfirst: "meme", dlast: "dil2222", country: "wewew" },
];

const [{ dfirst: goldWinner }, { country }] = alResults;

//DESTRUCTUING PARAMS
const walker = {
    first1: "first1",
    last2: "last2",
    gender: "male",
};

// function print(walker) {
//     const { first1, last2, gender } = walker;
//     console.log(`${first1} ${last2}  ${gender}`);
// }
// print(alResults);

function print({ first1, last2, gender }) {
    console.log(`${first1} ${last2}  ${gender}`);
}
print(walker);

const response = ["HTTO/1.1", "200 ok", "applicatin/json"];

function parseResponse([protocol, statusCode, contentType]) {
    console.log(protocol, statusCode, contentType);
}

parseResponse(response);