"use strict";
console.log("Hii from javascript");
// const title = document.getElementsByClassName("title");
// console.log(title);

// title[0].textContent = `Hi From Javascript dom`;
// const value = (title[0].style.textAlign = `center`);
// console.log(value);

// var add = function (num1, num2) {
//   return num1 + num2;
// };
// add(11, 3);

let count = 0;
const getData = function () {
  console.log(`Getting the data ${count++}`);
};

const debounce = function (fn, delay) {
  let timer;

  return function () {
    let context = this,
      arg = arguments;
    console.log(context);
    console.log(arg);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
};
const smartFunction = debounce(getData, 300);
