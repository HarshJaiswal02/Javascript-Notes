# JavaScript Hoisting

## What is Hoisting?

JavaScript **hoisting** refers to the process where the interpreter moves the declarations of functions, variables, classes, or imports to the top of their scope, prior to code execution. This allows you to use variables or functions before they are declared.

## Example of Hoisting

```javascript
console.log(x); // undefined
console.log(getName); // function definition
getName(); // Prints y and function message

var x = 10;

function getName() {
  var y = 111;
  console.log(y); // 111
  console.log("GetName normal syntax function");
}

getName(); // Re-executes the function
```

Variables declared with var are hoisted, but their value is undefined until assigned.

```javascript
console.log(funName); // undefined
var funName = () => {
  console.log("Arrow function in hoisting");
};
```

Anonymous functions declared with var are also hoisted, but the reference is undefined.

```js
console.log(anonymous); // undefined
var anonymous = function () {
  console.log("Anonymous function");
};
```
