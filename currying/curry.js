// In javascript function are first class objects/functions
// Implemented using - BIND

let multiply = function (x, y) {
  console.log(x * y);
};

const multiplyTwo = multiply.bind(this, 2);

multiplyTwo(5);

const multiplyThree = multiply.bind(this, 3);

multiplyThree(5);

//Implemented Using - CLOUSER

const addNum = function (x) {
  return function (y) {
    return function (z) {
      console.log(x * y * z);
    };
  };
};

const addNumAgain = addNum(5);
addNumAgain(2)(3);

addNum(5)(2)(3);

//Interview question

// You have to implement an add funtion currying for n arguments
// SOLUTION//
// I know hard-code for 2 arguments
const sum = function (a) {
  return function (b) {
    if (b == undefined) return a;
    return sum(a + b);
  };
};

const total = sum(1)(2)(3)(4);
console.log("Sum :", total());
