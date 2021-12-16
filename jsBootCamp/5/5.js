// First was getElementById

console.log(document.getElementsByTagName("input")); // it is not an array
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("h3")); // HTMLCollection is arguments

const inputs = document.getElementsByTagName("input");
console.log(inputs[0]);
console.log(inputs[1]);
console.log(inputs[2]);

// it is not array but we can do some things with it

for (let input of inputs) {
    console.log(input);
}

// also we can turn it (inputs) in to an array

const arr = [...inputs];
console.log(arr);

// if we set sum text inside the inputs

for (let input of inputs) {
    console.log(input.value);
}

// get element by class name

const specialClass = document.getElementsByClassName("special");
console.log(specialClass);

const chickens = document.getElementsByClassName("chikens"); // it can not ids ether
console.log(chickens);

const ul = document.getElementsByTagName("ul")[0]; // [0] means taking the first one of that colection
console.log(ul);
const specialUlTags = ul.getElementsByClassName("special");
console.log(specialUlTags);

// querySelector and  querySelectorAll