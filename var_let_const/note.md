# JavaScript Variables: `var`, `let`, and `const`

explains the differences between the `var`, `let`, and `const` keywords in JavaScript in terms of

1. scope
2. re-declaration
3. initialization
4. hoisting behavior.

| Feature                             | `var`                                                          | `let`                                                                   | `const`                                                                 |
| ----------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Scope**                           | Functional or global                                           | Block                                                                   | Block                                                                   |
| **Re-declaration & Updating**       | Updated and re-declared in the same scope.                     | Can be updated, but cannot be re-declared in the same scope.            | Cannot be updated or re-declared in `any` scope.                        |
| **Initialization**                  | Can be declared without initialization.                        | Can be declared without initialization.                                 | Must be initialized at the time of declaration.                         |
| **Accessing before Initialization** | Can be accessed without initialization (value is `undefined`). | Cannot be accessed before initialization (throws `ReferenceError`).     | Cannot be accessed before initialization (must be initialized).         |
| **Hoisting Behavior**               | Hoisted and initialized with `undefined`.                      | Hoisted but stays in the Temporal Dead Zone (TDZ) until initialization. | Hoisted but stays in the Temporal Dead Zone (TDZ) until initialization. |

## Additional Notes

- **Temporal Dead Zone (TDZ)**: Both `let` and `const` are hoisted to the top of their block, but they remain in a "dead zone" where they cannot be accessed before the actual line of initialization.
- **Re-declaration and Updates**: While `var` allows re-declaration and updating, `let` only allows updating, and `const` allows neither re-declaration nor updating once assigned.
- **Best Practices**: It is generally recommended to use `let` and `const` for better scoping rules, with `const` for variables that should not change.



# Quick Summary: `var`, `let`, and `const`

| Feature                | `var`           | `let`     | `const`   |
| ---------------------- | --------------- | --------- | --------- |
| **Scope**              | Global/Func     | Block     | Block     |
| **Re-declaration**     | Yes             | No        | No        |
| **Update**             | Yes             | Yes       | No        |
| **Initialization**     | Optional        | Optional  | Required  |
| **Access Before Init** | Yes (undefined) | No (TDZ)  | No (TDZ)  |
| **Hoisting**           | Yes             | Yes (TDZ) | Yes (TDZ) |
