/*
const repeat = (str, times) => {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
};

const scream = (str) => {
    return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement("h1");
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
};
console.log("HELLO!");

makeRant("I hate mayonnaise", document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

*/

// js is singe threaded language it is not multitasking

console.log("I HAPPEN FIRST");
//  alert('HI there')
setTimeout(function () {
  console.log("I HAPPEN THIRD");
}, 3000);
// THE HANDELING OF TIME IS TASK OF BROWSER JS SAYS TO BROwSER TO REMINDE ME TO RUN IT AFTER 3SEC
console.log("I HAPPEN SECOND");

const btn = document.querySelector("button");
/*
bad way
setTimeout(function() {
    btn.style.transform = `translateX(100px)`;
    setTimeout(() => {
        btn.style.transform = `translateX(200px)`;
    }, 2000);
}, 1000);
*/
//onst btn = document.querySelector("button");

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    if (elRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// LOOK AT THIS UGLY MESS!
moveX(
  btn,
  300,
  1000,
  () => {
    //success callback
    moveX(
      btn,
      300,
      1000,
      () => {
        //success callback
        moveX(
          btn,
          300,
          1000,
          () => {
            //success callback
            moveX(
              btn,
              300,
              1000,
              () => {
                //success callback
                moveX(
                  btn,
                  300,
                  1000,
                  () => {
                    //success callback
                    alert("YOU HAVE A WIDE SCREEN!");
                  },
                  () => {
                    //failure callback
                    alert("CANNOT MOVE FURTHER!");
                  }
                );
              },
              () => {
                //failure callback
                alert("CANNOT MOVE FURTHER!");
              }
            );
          },
          () => {
            //failure callback
            alert("CANNOT MOVE FURTHER!");
          }
        );
      },
      () => {
        //failure callback
        alert("CANNOT MOVE FURTHER!");
      }
    );
  },
  () => {
    //failure callback
    alert("CANNOT MOVE FURTHER!");
  }
);

// promises

// const willGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     rand < 0.5 ? resolve() : reject();
// });
// //.then happen if willgetyou a dog resolved
// willGetYouADog.then(() => {
//     console.log("Yea We Got A Doggy ");
// });
// willGetYouADog.catch(() => {
//     console.log(":( No Dog");
// });
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      rand < 0.5 ? resolve() : reject();
    }, 5000);
  });
};
//.then happen if willgetyou a dog resolved

// makeDogPromise().then(() => {
//     console.log("Yea We Got A Doggy ");
// });
// makeDogPromise().catch(() => {
//     console.log(":( No Dog");
// });
makeDogPromise()
  .then(() => {
    console.log("Yea We Got A Doggy ");
  })
  .catch(() => {
    console.log(":( No Dog");
  });

// resolving reject w value

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      const pages = {
        "/users": [
          { id: 1, username: "alarab" },
          { id: 5, username: "almoalem" },
        ],
        "/about": "this is the about page",
        "/users/1": {
          id: 1,
          username: "dil22",
          upvoted: "360",
          city: "Lisbon",
          topPostId: 6546241654,
        },
        "/posts/6546241654": {
          id: 85855,
          title: "oooh you toch my talala ooo my ding ding dong",
        },
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404, dick: 85 });
      }
    }, 3000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log("status Code", res.status);
    console.log("Data", res.data);
    console.log("Request Worked");
  })
  .catch((res) => {
    console.log(res.status, res.dick); // logging the object that reject passes
    console.log("Request Faild");
    // throw new Error("dick");
  });

fakeRequest("/dodoridodo")
  .then((res) => {
    console.log("status Code", res.status);
    console.log("Data", res.data);
    console.log("Request Worked");
  })
  .catch((res) => {
    console.log(res.status, res.dick); // logging the object that reject passes
    console.log("Request Faild");
    // throw new Error("dick");
  });

fakeRequest("/users")
  .then((res) => {
    const id = res.data[0].id;
    console.log(res);
    console.log(res.data[0].id);
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    console.log(res);
    const postID = res.data.topPostId;
    return fakeRequest(`/postsqwee/${postID}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err, "error");
  });
//in this way we only need one catch
