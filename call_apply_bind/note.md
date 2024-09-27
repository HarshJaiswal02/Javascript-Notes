# JavaScript Function Borrowing: `call`, `apply`, and `bind`

## Definitions

- **Function Borrowing**: A technique that allows an object to use a method from another object.

## `call()`

- **Definition**: Calls a function with a specified `this` value and individual arguments.
- **Usage**: `func.call(thisArg, arg1, arg2, ...)`
- **Example**:

  ```javascript
  function printName(city, phone) {
    console.log(this.name + " from " + city + ", Phone: " + phone);
  }

  const name1 = { name: "John" };
  printName.call(name1, "Jaipur", "287872193232");
  ```

## `apply()`

- **Definition**: Similar to call(), but takes an array of arguments instead of individual arguments..
- **Usage**: `func.apply(thisArg, [argsArray])`
- **Example**:

  ```javascript
  function printName(city, phone) {
    console.log(this.name + " from " + city + ", Phone: " + phone);
  }

  const name2 = { name: "Suresh Raina" };
  printName.apply(name2, ["Uttar Pradesh", "3732531128"]);
  ```

## `bind()`

- **Definition**: Creates a new function that, when called, has its this set to a specific value, with preset initial arguments.
- **Usage**: `func.bind(thisArg, arg1, arg2, ...)`
- **Example**:

  ```javascript
  function printName(city, phone) {
    console.log(this.name + " from " + city + ", Phone: " + phone);
  }

  const name3 = { name: "Bob" };
  const copyUsingBind = printName.bind(name3, "UK", "2818912");
  copyUsingBind(); // Executes the bound function
  ```

# Summary of Differences

- call(): Pass arguments individually.
- apply(): Pass arguments as an array.
- bind(): Creates a new function with a bound this and preset arguments.
