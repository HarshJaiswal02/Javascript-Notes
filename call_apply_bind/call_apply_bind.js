// let name1 = {
//   firstName: "Harsh",
//   lastName: "Jaiswal",
// };

// const printName = function (state, phoneNo) {
//   console.log(
//     `${this.firstName} ${this.lastName} from ${state} and phoneNo: ${phoneNo}`
//   );
// };

// let name2 = {
//   firstName: "Suresh",
//   lastName: "Raina",
//   //   printName: function () {
//   //     console.log(`${this.firstName} ${this.lastName}`);
//   //   },
// };

// name1.printName();
// name2.printName();

//function borrowing... using call , apply

// name1.printName.call(name2);
// name1.printName.call(name2); // rather than making a same function we just used the call method

// name1.printName.call(name2, "Uttarpradesh"); //argument (this,arguments)

//Taking out the printName out of object names and making it individual

// printName.call(name1, "Jaipur", "287872193232");
// printName.call(name2, "UttarPradesh", "37322329128");
// printName.apply(name2, ["UttarPradesh", "3732531128"]); // arguments are passed in arrayList - difference between all and apply

// //Bind will give us the copy of the function execution that can be used anytime;
// let name3 = {
//   firstName: "Random",
//   lastName: "Drinker",
// };
// const copyUsingBind = printName.bind(name3, "UK", "2818912");
// console.log("Doing some task");
// console.log("......");
// console.log(copyUsingBind);
// copyUsingBind();
// console.log("End");

// let name1 = {
//   first: "Harsh",
//   last: "Jaiswal",
// };

// function fullName(num, city, message) {
//   console.log(
//     `${this.first} ${this.last} age ${num} city ${city} message: ${message}`
//   );
//   return `${this.first} ${this.last}`;
// }

// // const returnFunc = fullName.bind(name1, "18", "Prayagraj");
// // returnFunc("by return func");

// Function.prototype.myBind = function (...arg) {
//   const obj = this;
//   params = arg.slice(1);

//   return function (...value) {
//     obj.apply(arg[0], [...params, ...value]);
//   };
// };

// name2 = {
//   first: "Harsh",
//   last: "Jaiswal",
// };
// // this prototype arg[0] params
// const func = fullName.myBind(name2, "18", "Prayagraj");
// func("extra value");

let name3 = {
  first: "Harsh",
  last: "Jaiswal",
};

let name4 = {
  first: "Suresh",
  last: "Raina",
  fullname: function () {
    console.log(`${this.first} ${this.last} `);
  },
};

// name4.fullname();
name4.fullname.call(name3);
