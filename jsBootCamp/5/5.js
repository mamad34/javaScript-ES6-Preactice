// First was getElementById

console.log(document.getElementsByTagName("input")); // it is not an array
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("h3")); // HTMLCollection is arguments

const inputs = document.getElementsByTagName("input");