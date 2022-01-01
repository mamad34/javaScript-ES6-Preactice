function getData() {
  const data = axios.get("https://swapi.dev/api/planets/").then((data) => {
    console.log(data); // second this run
  });
  console.log(data); // first run
}
getData();

// function greet() {
//   return "hello";
// }
async function greet() {
  return "hello";
}

console.log(greet());

greet().then((val) => {
  console.log("PROMISE RESOLVED WITH : ", val);
});

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw "X and Y must be numbers";
//   }
//   return x + y;
// }

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y must be numbers");
    }
    resolve(x + y);
  });
}

console.log(add(5, 4));
console.log(add(5, "e"));

add("e", "r")
  .then((val) => {
    console.log("PROMISE RESOLVED WTIH", val);
  })
  .catch((err) => {
    console.log("PROMISE REJECTED WITH ", err);
  });

// Await
// firts way
/*

function getPlanets() {
  return axios.get("https://swapi.dev/api/planets/");
}

getPlanets().then((res) => {
  console.log(res.data);
});

*/

async function getPlanets() {
  // second way of catching is try catch
  try {
    const res = await axios.get("https://swapi.dev/api/planets/"); // it will wait for the results dont need then
    console.log(res.data); //the axios promise is resolved
  } catch (e) {
    console.log("trycatch Error with ", e);
  }
}

getPlanets();

// // for catching first way
// getPlanets().catch((err) => {
//   console.log("Al Error", err);
// });

// multiple Awaits

const btn = document.querySelector("button");
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, currLeft, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

async function animateRight(el, amt) {
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
  await moveX(el, amt, 1000);
}
animateRight(btn, 100).catch((err) => {
  console.log("no more space ", err);
  animateRight(btn, -100);
});
