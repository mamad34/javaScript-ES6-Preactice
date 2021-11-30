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