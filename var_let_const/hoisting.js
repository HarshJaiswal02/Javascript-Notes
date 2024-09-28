//HOSTING: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

console.log(x); //undefined
console.log(getName); // give definition of function
getName(); // prints the console (See the source Browser : memory space or memory vs stack context)
var x = 10;

function getName() {
  var y = 111;
  console.log(y);
  console.log("GetName normal syntax function");
}

getName(); // give definition of function

// console.log(funName); //! undefined
var funName = () => {
  console.log("Arrow function in hoisting");
};

console.log(anonymous); //! anonymous for var Gives undefined
var anonymous = function () {
  console.log("anonymous function");
};
