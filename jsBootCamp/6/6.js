const parentUL = document.querySelector("ul");
const newLI = document.createElement("li");
newLI.innerText = "this is added before  li ";
const firstLI = document.querySelector("li.special");
parentUL.insertBefore(newLI, firstLI);

const newLI2 = document.createElement("li");
newLI2.innerText = "this adde before the last li [4]";
const lastLI = document.querySelectorAll("li")[4];
parentUL.insertBefore(newLI2, lastLI);

const i = document.createElement("i");
i.innerText = "I AM ITALICS";
const firstP = document.querySelector("p");
firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("afterend", i);

firstP.append(i, newLI); // added multiple things aftter the p
firstP.prepend(i, newLI); // added multiple things befor the p

// removeChild & remove

const theBottomUL = document.querySelector("section ul");
const removeMe = theBottomUL.querySelector(".special");
theBottomUL.removeChild(removeMe);

const h1 = document.querySelector("h1");
h1.remove();