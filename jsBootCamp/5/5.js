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

const theH1 = document.querySelector("h1");
console.log(theH1);
const theFirsParagraph = document.querySelector("p"); // query selector will find the firs match
console.log(theFirsParagraph);
console.dir(theFirsParagraph);
const selectAnId = document.querySelector("#text");
console.dir(selectAnId);
console.log(selectAnId);

const firstThingWithClassOfSpecial = document.querySelector(".special");
console.log(firstThingWithClassOfSpecial);

const firstThingWithParagraphClass = document.querySelector("p.special"); // it means p tag with class of special
console.log(firstThingWithParagraphClass);

const sectionSpecial = document.querySelector("section li.special"); // find class of special inside of section tag in li s
console.log(sectionSpecial);

const numberInput = document.querySelector("input[type = number]"); // we use css thing to select
console.log(numberInput);

// query selector all

const allOfInputs = document.querySelectorAll("input");
console.log(allOfInputs);
console.log(allOfInputs.length);
console.log(allOfInputs[1]);

// section 14

// working with innerText & text content

const thisIsH1 = document.querySelector("h1");
console.log(thisIsH1.innerText);
console.dir(thisIsH1.innerText);

const thisIsUl = document.querySelector("ul");
console.log(thisIsUl); // return ALl text inside the ul

// document.querySelector("body") === document.body     so ->

console.log(document.body.innerText); // returns all the txt in the body

thisIsH1.innerText = "This is changed H1 with inner text";

// if we change ul with inner text it will change all the text of li's to a single text

console.log(thisIsH1.textContent);

const thePTagWithIdText = document.querySelector("#text");
console.log(thePTagWithIdText.innerText); // inner text what will show on the page
console.log(thePTagWithIdText.textContent); // this two have different results content will get all the text inside the code but remove the tags