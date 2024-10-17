const firstPromise = new Promise((res, rej) => {
  const value = Math.random();
  if (value > 0.5) {
    res({ message: "First Promise Resolved.", value });
  } else {
    rej({ message: "First Promise Rejected", value });
  }
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    const value = Math.random();
    if (value > 0.5) {
      res({ message: "Second Promise resolved after 2s.", value: value });
    } else {
      rej({ message: "Second Promise rejected after 2s.", value: value });
    }
  }, 2000);
});

const thirdPromise = new Promise((res, rej) => {
  res("Too lazy to reject, sorry guys, third promise resolved!");
});

// firstPromise
//   .then((firstPromiseResult) => {
//     console.log(firstPromiseResult);
//     return secondPromise;
//   })
//   .then((secondPromiseResult) => {
//     console.log(secondPromiseResult);
//     return thirdPromise;
//   })
//   .then((thirdPromiseResult) => {
//     console.log(thirdPromiseResult);
//     /* DO NOT return a value in between except a promise while chaining promises,
//       because that will stop the chain from recognising the error of any promise in sequence
//       and won't be able to pass it down to the final catch which would have eventually stopped
//       the execution at that promise. */
//   })
//   .catch((error) => console.log(error));

firstPromise
  .then((firstPromiseResult) => {
    console.log(firstPromiseResult);
    return secondPromise;
  })
  .catch((firstPromiseError) => console.log(firstPromiseError))

  .then((secondPromiseResult) => {
    // this runs regardless of the second promise being resolved or rejected
    console.log("hello:", secondPromiseResult);
    return thirdPromise;
  })
  .catch((secondPromiseError) => console.error(secondPromiseError))

  .then((thirdPromiseResult) => {
    console.log(thirdPromiseResult);
  })
  .catch((thirdPromiseError) => console.error(thirdPromiseError))
  .then(() => console.log("This will run no matter what!"));
