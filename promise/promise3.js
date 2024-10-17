// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("First promise resolved!");
//     resolve(
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("Second promise running!");
//           if (Math.random() > 0.5) {
//             reject("Final error from second promise");
//           } else {
//             resolve("Second Promise Resolved!");
//           }
//         }, 1000);
//       })
//     );
//   }, 1000);
// });

const promise = new Promise(function (resolve, reject) {
  console.log("Promise entry gate 1");
  setTimeout(function () {
    console.log("setTimeout start first");

    resolve(
      new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log("setTimeOut Second start ");
          const value = Math.random();
          if (value > 0.5) {
            resolve(value);
          } else {
            reject("The value is less than 0.5 inner promise");
          }
        }, 1000);
      })
    );
  }, 2000);
});

console.log("This line is after the promise being made ");

promise
  .then((result) => {
    return result; // result is the second promise, so this will wait for its resolution
  })
  .then((finalResult) => {
    console.log(finalResult); // Logs the final result from the second promise
  })
  .catch((error) => {
    console.error(error); // Handles any rejection from either promise
  });
