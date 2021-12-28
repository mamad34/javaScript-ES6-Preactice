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

//first way

/*
moveX(btn, 100, 1000)
  .then(() => {
    console.log("Done for once");
  })
  .then(() => {
    moveX(btn, 100, 1000);
  });
*/

// second way

/*
moveX(btn, 100, 1000)
  .then(() => {
    return moveX(btn, 50, 1000);
  })
  .then(() => {
    return moveX(btn, 50, 1000);
  })
  .then(() => {
    return moveX(btn, 50, 1000);
  })
  .then(() => {
    return moveX(btn, 50, 1000);
  })
  .then(() => {
    return moveX(btn, 500, 1000);
  })
  .catch(() => {
    console.log("Out Of Space");
  });
*/

//third way

moveX(btn, 100, 1000)
  .then(() => moveX(btn, 50, 1000))
  .then(() => moveX(btn, 50, 1000))
  .then(() => moveX(btn, 50, 1000))
  .then(() => moveX(btn, 50, 1000))
  .then(() => moveX(btn, 505, 1000))
  .catch(({ bodyBoundary, elRight, currLeft, amount }) => {
    console.log(`body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px ${amount}px is too large`);
  });
