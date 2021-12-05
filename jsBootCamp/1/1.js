let day = 33;

switch (day) {
    case 1:
        {
            console.log("satarday");
            break;
        }
    case 2:
        {
            console.log("sunday");
            break;
        }
    case 3:
        {
            console.log("monday");
            break;
        }
    case 4:
        {
            console.log("thursday");
            break;
        }
    case 5:
        {
            console.log("wendsday");
            break;
        }
    case 6:
        {
            console.log("thuerqwewq");
            break;
        }
    default:
        {
            console.log("oh yea");
        }
}

let num = 7;

num === 7 ? console.log("num is 7 ") : console.log("num is not 7");

let shoppingList = ["one"];
shoppingList[1] = "two";
shoppingList[shoppingList.length] = "newOne";
shoppingList[0] = "ONE";
shoppingList.push("push item");
shoppingList.push(true);
shoppingList.pop();
shoppingList.unshift("unshifted");
shoppingList.unshift("unshifted to shifted");
shoppingList.shift();
console.log(shoppingList);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
console.log(array1.concat(array2, array3));

let itemsToSearch = [
    "apple",
    "orange",
    "mag",
    "ralphie",
    "added",
    "omg",
    "random",
];

console.log(itemsToSearch.includes("apple"));
console.log(itemsToSearch.includes("orgi"));
console.log(itemsToSearch.includes("apple", 3)); // dose apple include in forth array and after that ?
console.log(itemsToSearch.indexOf("omg"));
console.log(itemsToSearch.indexOf("venom"));
console.log(itemsToSearch.indexOf("omg", 6)); // dose omg include in 6 array and after that ?
console.log(itemsToSearch.reverse());
console.log(itemsToSearch.join());
console.log(itemsToSearch.join("   "));
console.log(itemsToSearch.join("و-*/"));
console.log(itemsToSearch.slice(0, 2));
console.log(itemsToSearch.slice(4));
console.log(itemsToSearch.slice(-3));

let arrayToSplice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayToSplice.splice(1, 0, "added by splice"); // (start from , delete item , what item to add )
console.log(arrayToSplice); // splice retuen deleted values if there is something to delete
arrayToSplice.splice(5, 1, "index 5 deleted and this text added");
console.log(arrayToSplice);
arrayToSplice.splice(7, 2, "index 7 and 8   deleted and this text added");
console.log(arrayToSplice);

let arrayToSort = ["s", "d", "a", "m", "b", "e"];
arrayToSort.sort();
console.log(arrayToSort);

const d2Arrays = [
    ["one", ["dil", "bil"]],
    ["three", "four"],
    ["five", "six"],
];

const myObject = {
    totalSteps: 308727,
    totalKilos: 211.1,
    avgCalorieBurn: 577,
    workoutsThisWeek: "5 of 7 ",
    avgGoodSleep: "23",
};
console.log(myObject.avgCalorieBurn);

const secondObject = {
    100: "one hundred",
    16: "sixteen",
    "76 trombones": "great Song!",
};

console.log(secondObject[100] + " " + secondObject[16]);
console.log(secondObject["76 trombones"]);

const palette = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30336b",
};

let myColor = "yellow";
console.log(palette[myColor]);
console.log(palette["re" + "d"]);
console.log(palette["blue"]);

const userReviews = {};
userReviews["firstItem"] = 4.4;
userReviews.lastItem = 3.4;
userReviews["firstItem"] += 0.4;

const students = {
    firstName: "David",
    LastName: "jones",
    strengths: ["music", "art"],
    exams: {
        midTerm: 92,
        final: 88,
    },
};

const avg = (students.exams.midTerm + students.exams.final) / 2;
students.exams.avrage = avg;

console.log(students.strengths[1]);

const shoppingCart = [{
        product: "Jenga Classic",
        price: 6.88,
        quantity: 1,
    },
    {
        product: "Eco Dot",
        prcie: 29.99,
        quantity: 3,
    },
    {
        product: "Fire Stick",
        prcie: 39.99,
        quantity: 2,
    },
];

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
console.log(nums === mystery); // same arrays but not same things address is different

// for fixing do this ------------>

let moreNums = nums;

console.log(nums === moreNums);

// [] === []  ----> false

let itemsOfForofLoop = ["item1", " item2", "item3", "item4", "item5"];

for (let sub of itemsOfForofLoop) {
    console.log(sub);
}

for (let char of "thisIsAText") {
    console.log(char.toUpperCase());
}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
    //Access index i of both arrays
    console.log(`${words1[i]}${words2[i]}`);
}

const movieReviews = {
    dil: 9.5,
    alien: 9,
    amielr: 8.3,
    googe: 7.2,
    john: 6.6,
    "in love": 8,
    "kill bill": 1,
    coake: 2.6547,
};

//it makes error ->
// for (let x of movieReviews) {
//     console.log(x);
// }

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]);
}
// for in wants an object

for (let prop in movieReviews) {
    console.log(prop);
    console.log(movieReviews[prop]);
}
// for in gives us the keys not the values
for (let k in [66, 77, 88, 99]) {
    console.log(k);
}

function showTheName(name) {
    console.log(name);
}
showTheName("the input name");

function sum(x, y) {
    console.log(x + y);
}

const theOne = ["apple", " dae", " mosx"];
const theTwo = ["orange", "qweqwe", "gfgf"];
const combinetArray = [...theOne, ...theTwo];
console.log(combinetArray);

function pp(x) {
    return x * x;
    console.log("this will never print");
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === "purple" || color === "green") {
            return true;
        }
    }
    return false;
}

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(" ") !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

//const and let scope
function blockedScope() {
    let x = "this is x inside the function";
    console.log(x);
}
blockedScope();
//console.log(x);

if (true) {
    let animal = "eel";
    console.log(animal);
}
console.log(animal);

//var scope (dose not have scope)

if (true) {
    var animal = "eel";
    console.log(animal);
}
console.log(animal);