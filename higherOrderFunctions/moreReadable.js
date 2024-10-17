const radius = [1, 4, 2, 3];
const area = function (r) {
  return Math.PI * r * r;
};

const diameter = function (r) {
  return 2 * r;
};

const perimeter = function (r) {
  return 2 * Math.PI * r;
};

// const calculate = (cb, r) => {
//   const output = [];
//   console.log(cb);

//   for (let i = 0; i < r.length; i++) {
//     let res = cb(r[i]);
//     output.push(res);
//     console.log(res);
//   }
//   return output;
// };
// console.log(calculate(area, radius));
// console.log(calculate(perimeter, radius));
// console.log(calculate(diameter, radius));

const a = radius.map((r) => Math.PI * r * r);
console.log(a);

Array.prototype.calculate = function (cb) {
  const output = [];

//   console.log(cb);
//   console.log("Value", this[0]);
  for (let i = 0; i < this.length; i++) {
    let res = cb(this[i]);
    output.push(res);
    // console.log(res);
  }
  return output;
};

console.log(radius.calculate(area));
