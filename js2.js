/*
const value = function (name, age) {
  return `My name is ${name} and age ${age}`;
};

console.log(value("james", 45));
*/

const value = (name, age) => {
  return `My name is ${name} and age ${age}`;
};

console.log(value("james", 45));

const value2 = (x, y) => x + y;
console.log(value2(1, 2));

const value3 = (x) => x + 10;
console.log(value3(1));

// object literal

const creatChareter = (name, powers) => {
  return {
    name: name,
    powers: powers,
    getFriends: () => {
      return "luis lane";
    },
    getEnemies() {
      return "skeletor";
    },
  };
};
const charecterObj = creatChareter("superman", "FLY");

console.log(charecterObj);

console.log(charecterObj.getFriends());

//defualt arguments
//ford is defualt value
function cars(brand = "ford") {
  console.log(`My brand is ${brand}`);
}
cars("chevy");
cars();

//rest oprator
/*es5 
function args (arg1,arg2,arg3){

    const arguments = [arg1,arg2,arg3];

    console.log(arguments)
}
args("val1","val2","val3")
*/

function args(...args) {
  console.log(arguments);
  console.log(arguments[0]);
}
args("val1", "val2", "val3");

//spread opreator

const brands1 = ["ford", "nissan"];
const otherBrand = ["audi", "bmw"];

// const newArray = brands1.concat(otherBrand);
// newArray.push("Other brand");
//es5

//es6
const newArray = [...brands1, ...otherBrand, "otherbrand"];

console.log(newArray);

//classes
