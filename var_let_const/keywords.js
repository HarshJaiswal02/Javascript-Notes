// Scope..
// console.log(age); //undefined  hosted and no error
// var age = 10;

// let age = 10;
// age = 100;
// console.log(age);

// const age = 10;
// // age = 100; // error assigning to constant variable
// console.log(age);

// Function scope

var value = `Outside the fuction scope`; // if i dont write this it will give me error on line 22
// ReferenceError: value is not defined

function accesingVarInsideFun() {
  var value = `This is functional scope`;
  console.log(value);
}

accesingVarInsideFun();
console.log(value);
