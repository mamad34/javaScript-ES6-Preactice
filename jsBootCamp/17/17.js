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

function makeColor(r, g, b) {
  const color = {}; // this refer to color object
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  return color;
}
console.log(makeColor(5, 255, 255));

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
firstColor.r = 255;
console.log(firstColor.rgb());

// Constructor

console.log("Hi".slice === "bye".slice);

function color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this); // without new keyword this refer to window obj
}
console.log(color(8, 8, 8));

// The new keyword does the following things:

// Creates a blank, plain JavaScript object.
// Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// Note: Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).

// Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// Returns this if the function doesn't return an object.

console.log(new color(8, 8, 5));

color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};
color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};
const color1 = new color(40, 50, 60);
const color2 = new color(0, 0, 0);
console.log(color1);
console.log(color2);
console.log(color1.rgb());
console.log(color2.rgb());
console.log(color1.rgb === color2.rgb); // true pointing to the same thing , same func in the prototype

//  Classes

class Color {
  constructor(r, g, b, name) {
    // constructor is a function that will immediately run when a new color created
    console.log("INSIDE CONSTRUCTOR");
    console.log(r, g, b, name);
    console.log(this); // refer to Color class but as we decleard new obj it refer to that obj
    this.r = r;
    this.g = g;
    this.b = b; // it will added to the Color object for ex c1 & c2
    this.name = name;
  }
  greet() {
    return `Hello From A Color Called ${this.name}`;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }
}

const c1 = new Color(255, 67, 8); // it will run
const c2 = new Color(); // undefined undefined undefined
const c3 = new Color(85, 85, 85, "Tomato");
const c4 = new Color(69, 69, 69);
console.log(c3.greet());
console.log(c4.rgb());
console.log(c4.rgba(0.4));

// extends , super , subclasses

class Pet {
  constructor(name, age) {
    console.log("in pet constructor");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("in  cat constructor");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "Meowwwww";
  }
}

const monty = new Cat("monty", 8);
console.log(monty);
console.log(monty.eat);
console.log(monty.eat());

class Dog extends Pet {
  bark() {
    return "haaaaap hapoooo";
  }
}

const wyatt = new Dog("wyatt", 85);
console.log(wyatt);
