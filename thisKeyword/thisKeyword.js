"use strict";
//this inside global
console.log(this);

//* this inside functional scope

function x() {
  //* this keyword work differently inside function
  //* acts differently strict / non strict mode
  let z = 5;
  console.log(z);
  console.log(this); //* non strict - window
  console.log(this); //* undefined(only functional) - strict
}
x();

//* NOTE: this will be assigned to undefined inside function scope ... If its in a strict mode
//* If its in a non-strict mode then this will borrow the windowObject

// this inside object

const obj = {
  name: "Harsh Jaiswal",
  age: 22,
  fn: function () {
    console.log(this);
  },
};

obj.fn();

// while learning this for object remember the call() , apply() , bind()
// obj1.method.bind(obj2) this will refer to obj2

// this inside arrow function ---> inside arrow it will be the "closed lexical context"

const arrowFn = () => {
  console.log(this); //window object (strict mode)
};
arrowFn();

const arrowObj = {
  x: () => {
    console.log("Inside arrowObj ", this); //takes the window (strict mode)
  },
};

arrowObj.x();

const nestedObj = {
  age: 20,

  x: function () {
    const nestedFn = () => {
      console.log(this); // {"age": 20 , x:f}  closed lexical context
    };

    nestedFn();
  },
};

nestedObj.x();

//inside the DOM --> this  =  HTMLelement
