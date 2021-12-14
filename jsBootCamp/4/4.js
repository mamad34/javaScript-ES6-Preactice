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