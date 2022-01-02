//OOP
console.log([]); // prototype

const arr = [1, 2, 3];

console.log(arr);

arr.sing = function () {
  console.log("Singing in the rain");
}; // added inside the methods of the arry

// but arrya.phsh('x') is inside of proto

const body = document.body;
console.dir(body);

console.log(String.prototype);

String.prototype.grumpus = () => {
  alert("Hello");
};

const cat = "blue";

cat.grumpus();

String.prototype.yell = function () {
  return ` OH YEA ${this.toUpperCase()}`;
};

console.log("hello".yell());
// __proto__ is refrence to prototype
