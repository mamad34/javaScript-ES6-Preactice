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
setTimeout(function() {
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

const willGetYouADog = new Promise((resolve, reject) => {
    const rand = Math.random();
    rand < 0.5 ? resolve() : reject();
});
//.then happen if willgetyou a dog resolved
willGetYouADog.then(() => {
    console.log("Yea We Got A Doggy ");
});
willGetYouADog.catch(() => {
    console.log(":( No Dog");
});