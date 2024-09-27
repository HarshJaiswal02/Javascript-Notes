// Interview question : Suppose a browser do not support the bind() method . You have to make your own myBind() method and perform similar execution

//TODO : Sadabahar bind
// let name1 = {
//   username: "HarshJaiswal",
// };

// const printName = function () {
//   console.log(`Name : ${this.username} `);
// };

// const refBind = printName.bind(name1);
// refBind();

//? solution
// 1.Use Function.prototype

Function.prototype.myBind = function (...args) {
  let obj = this; // why this... because =>printName
  params = args.slice(1); // remaining parameters //[state,phoneNo]
  return function (...values) {
    // obj.call(args[0])
    // obj.apply(args[0], ...params);
    obj.apply(args[0], [...params, ...values]);
  };
};

const printName = function (state, role, country, extra) {
  console.log(
    `Name : ${this.username} State: ${state} and ${role} ${country} some ${extra}`
  );
};

let name1 = {
  username: "HarshJaiswal",
};

const refBind = printName.myBind(name1, "Uttar Pradesh", "Cricketer");
refBind("country", "Extra while calling");

// const printingName = function (age, extra) {
//   console.log(`Name : ${this.place} , ${age} , ${extra}`);
// };
// Function.prototype.myBind2 = function (...args) {
//   let obj = this; // this->printingName
//   params = args.slice(1);
//   console.log(params);
//   return function (...values) {
//     obj.apply(args[0], [...params, ...values]);
//   };
// };

// let names = {
//   place: "Mumbai",
// };
// const retFunc = printingName.myBind2(names, 22);

// retFunc("extra words");
