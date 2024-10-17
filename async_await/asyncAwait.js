// What is async?
// Ans -> async is a keyword which is used befire a function to make it asynchronous
// This async function always return a promise
// async function someFunction() {
//   return "string value"; // or
//   return new Promise();
// }

// const dataPromise = someFunction();
// console.log(dataPromise);

// dataPromise
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// // it you  return a PROMISE through it  fine as async is suppose to add promise but but..
// // if you attach a return value then it automatically wraps PROMISE object with value attached to object of promise
// const p1 = new Promise(function (resolve, reject) {
//   resolve("This is async promise");
// });

// async function fetchData() {
//   return p1;
// }

// const fetchPromise = fetchData();

// //If we return a promise from a async then the promise "wont" be wrapped onto it
// console.log("FetchPromise ", fetchPromise);
// fetchPromise.then((res) => console.log(res));

// What is await?
// ! ANs-> await is a keyword that is only being used inside a async function

//how is async await being used
// The combo is used to handle promises

// const p = new Promise((res, rej) => res("WHY TO USE ASYNC AWAIT"));

// async function getData2() {
//   const val = await p;
//   console.log("THIRD", val);
// }
// console.log("FIRST", getData2());
// // getData2();
// function getData() {
//   p.then((res) => console.log("FOURTH", res));
// }

// console.log("SECOND", getData());

const p1 = new Promise((res, rej) => {
  console.log("Inside promise 1");
  setTimeout(() => {
    res("Promise 1 resolved");
  }, 10000);
});

const p2 = new Promise((res, rej) => {
  console.log("Inside promise 2");
  setTimeout(() => {
    res("Promise 2 resolved");
  }, 1000);
});

async function getData() {
  console.log("Entered the data");
  const val2 = await p2;
  console.log("val2", val2);
  const val = await p1;
  console.log("Val", val);
}

getData();

console.log("FIRST");
console.log("FIRST");
console.log("FIRST");
console.log("FIRST");
console.log("FIRST");
console.log("FIRST");
console.log("FIRST");
console.log("FIRST");

getData();

console.log("SECOND");
console.log("SECOND");
console.log("SECOND");
console.log("SECOND");
console.log("SECOND");

const pr = new Promise((res, rej) => {
  console.log("The Executor function is synchronous ");
  setTimeout(() => {
    console.log("Promise Resolve after 5s");
    res("Resolved promise after 5s");
  }, 5000);
});
async function handlePromise() {
  console.log("First line entry");
  const resolveVal = await pr;
  console.log(resolveVal);
}

handlePromise();


//Call stack 
[empty]
[handlePromise()]
[] //-> handlePromise as soon as it encountered the await //pop out in (SUSPENDED STATE) it will not block the main thread
// .then .catch await they consume the promise not generate them
