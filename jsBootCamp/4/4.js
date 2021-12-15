// Old Es2015
// the old way to return object
// const getstats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg,
//     };
// };

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.85, 4.0, 3.0];

// const status = getstats(reviews);

const getstats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg,
    };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.85, 4.0, 3.0];

const status = getstats(reviews);

// computed properties

const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "james cameron";
// way 1
// const team = {
//     role: person,
// };

// // way 2
// const team = {};
// team[role] = person;
// team[role2] = person2;

// Computed way (3)
const team = {
    [role]: person,
    [role2]: person2,
    [16 + 0]: "sixteen",
};

// function addProp(obj, key, valu) {
//     const copy = {...obj };
//     copy[key] = valu;
//     return copy;
// }

const addProp = (obj, key, value) => {
    return {...obj, [key]: value };
};
const res = addProp(team, "happy", ":)");

// adding method to objects

const add = function(x, y) {
    return x + y;
};

const math = {
    add,
    multiply: function(x, y) {
        return x * y;
    },
};

console.log(math.add(1, 1), math.multiply(8, 8));

// short hand object method

const auth = {
    userName: "dick wolf ",

    stayIn: () => {
        console.log("YOU STAY IN");
    },

    login() {
        console.log("YOU LOGGED IN ");
    },
    logout() {
        console.log("GOODBYE");
    },
};

// THIS

function sayHi() {
    console.log("hi");
    console.log(this);
}
sayHi();

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window is global scope in the browser

const personn = {
    first: "Cher",
    last: "viana",
    nickName: "hola",
    pussy: "nane khalili",
    fullName() {
        console.log(this); // value of this is now the object
        console.log(`${this.first} , ${this.last} ho yea`);
        const { first, last, nickName, pussy, fullName } = this;

        return `${first} , ${last} , ${nickName}`;
    },
    printBio() {
        this.fullName();
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAH`); // undefined says HAHAH // value of this is set to the window
    },
};

const printBio = personn.printBio; // Error , this pointig to window not the object

const annoyer = {
    phrases: [
        "little",
        " carry on ",
        "i can do it ",
        "totes",
        "yoyo",
        "cant stop , wont stop",
    ],
    pickPhrase() {
        // this.phrases
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            // this.timerId will add to items of our object
            console.log(this);
            console.log(this.pickPhrase()); // it will have an error after first running if we use function insted of arrow functon
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log("stopped");
    },
};

// Putting All ToGether
function makeDeck() {
    const deck = [];
    const suits = ["Hearts", "diamonds", "spades", "clubs"];
    const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
    for (let value of values.split(",")) {
        for (let suit of suits) {
            deck.push({
                //  value: value, suit: suit  way 1
                // way 2 ->
                value,
                suit,
            });
        }
    }
    return deck;
}

function drawCard(deck) {
    return deck.pop();
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

const myDeck = {
    deck: [],
};