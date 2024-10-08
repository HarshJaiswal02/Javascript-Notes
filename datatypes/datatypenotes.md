# JavaScript Data Types

JavaScript has **8 basic data types**, categorized into **primitive** and **non-primitive** types. This document explores each type with examples and special cases.

### **Primitive Data Types**

Primitive data types contain a single value and are immutable (cannot be altered). There are **7 primitive types**:

1. **Null**
2. **Undefined**
3. **Number**
4. **Boolean**
5. **BigInt**
6. **String**
7. **Symbol**

#### **1. Null**

- The `intentional absence` of any object value.
- It's explicitly assigned to a variable to denote that it holds no value.

**Example:**

```js
let car = null; // Variable intentionally empty
```

**Exceptional Case:**

```js
console.log(typeof null); // Outputs: "object" (JavaScript bug)
```

## NOTE: `JavaScript quirk` Even though `null` represents no object, `typeof` null incorrectly returns `"object"`. This is a

#### **2. Undefined**

- Represents an uninitialized variable.
- Indicates a variable is declared but has not been assigned a value yet.

**Example:**

```js
let result;
console.log(result); // Outputs: undefined
```

**Exceptional Case:**

```js
function getAge() {}
console.log(getAge()); // Outputs: undefined (no return value)
```

In JavaScript, functions that don't explicitly return a value return `undefined`.

---

#### **3. Number**

- Represents both integer and floating-point numbers.
- Special values: `Infinity`, `-Infinity`, and `NaN` (Not a Number).

**Example:**

```js
let price = 100;
let temperature = -273.15;
```

**Exceptional Case:**

```js
console.log(10 / 0); // Outputs: Infinity
console.log("abc" - 2); // Outputs: NaN (invalid mathematical operation)
```

`NaN` is a result of invalid number operations, while division by zero results in `Infinity`.

---

#### **4. Boolean**

- Represents a logical entity, having only two values: `true` or `false`.

**Example:**

```js
let isAvailable = true;
let isDeleted = false;
```

**Exceptional Case:**

```js
console.log(Boolean(0)); // Outputs: false (0 is falsy)
console.log(Boolean(" ")); // Outputs: true (non-empty strings are truthy)
```

JavaScript has **truthy** and **falsy** values (e.g., `0`, `null`, `undefined` are falsy, while non-empty strings, non-zero numbers are truthy).

---

#### **5. BigInt**

- Used to represent integers larger than `2^53 - 1`.
- Created by appending `n` to the end of an integer.
- BigInt can be instance by appending "n" to the end of an integer literal or by calling the `BigInt() constructor` with an integer or a string representing an integer as its argument.

**Example:**

```js
const largeNumber = 123456789123456789123456789n;
```

**Exceptional Case:**

```js
let num = 10n;
console.log(num + 2); // Throws TypeError: Cannot mix BigInt and Number
```

BigInt and Number types cannot be directly mixed without explicit conversion.

---

#### **6. String**

- Used to represent textual data, enclosed in single (`' '`), double (`" "`), or template literals (`` ` ` ``).

**Example:**

```js
let firstName = "John";
let greeting = `Hello, ${firstName}!`; // Template literal with interpolation
```
#### **7. Symbol**

- Used for unique identifiers, ensuring uniqueness even if two symbols have the same description.

**Example:**

```js
const sym1 = Symbol("key");
const sym2 = Symbol("key");
console.log(sym1 === sym2); // Outputs: false (symbols are always unique)
```

**Exceptional Case:**

```js
const obj = {
  [Symbol("id")]: 1,
};
console.log(obj); // Outputs: { Symbol(id): 1 } (hidden in object property iteration)
```

Symbol properties are not enumerable, meaning they don’t show up in object iterations like `for...in` or `Object.keys()`.

---

### **Non-Primitive Data Type**

#### **8. Object**

- Used to store collections of data in key-value pairs.

**Example:**

```js
let user = {
  name: "Alice",
  age: 25,
};
```

**Exceptional Case:**

```js
let arr = [1, 2, 3];
console.log(typeof arr); // Outputs: "object" (Arrays are technically objects)
```

In JavaScript, arrays, functions, and other complex types are objects.

---

### **Special Notes on Data Types**

- **Primitive vs object**: `primitive data - immutable` (i.e., their values cannot be changed),
  `object data - mutable `(i.e., values can changed by CRUD on key-value pairs).`Primitive data - passed by value`,`object data types -passed by reference`.
- **Type Coercion**: JavaScript automatically converts data types in certain situations (e.g., adding a string and a number).

  **Example:**

  ```js
  console.log("5" + 2); // Outputs: "52" (number 2 is coerced to string)
  console.log("5" - 2); // Outputs: 3 (string "5" is coerced to number)
  ```

- **Primitive Wrappers**: Although primitive values are immutable, JavaScript automatically wraps them in corresponding object types temporarily (e.g., `String`, `Number`, `Boolean`).

  **Example:**

  ```js
  let str = "Hello";
  console.log(str.toUpperCase()); // Outputs: "HELLO"
  ```

  JavaScript treats `str` as an object when accessing methods like `toUpperCase()`, but the primitive remains immutable.

---

### **Conclusion**

## JavaScript's 8 data types cover everything from basic primitive values to complex objects. Primitive types are used for simple data storage, while objects are used for collections and more complex structures.
