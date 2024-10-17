const arr = [1, 2, 4, 6];
function increaseTwoTimes(R) {
  return 2 * R;
}

function binary(x) {
  let b = "";
  while (x > 0) {
    b = (x % 2) + b;
    x = Math.floor(x / 2);
  }
  return b;
}

function isEven(x) {
  return x % 2 === 0;
}
const even = arr.filter((x) => x % 2 === 0).map((x) => 3 * x);

console.log(even);

const sum = arr.reduce((acc, val) => acc + val, 0);

console.log(sum);

const arr2 = [23, 43, 1, 4, 3, 13, 233];

const findMax = function (arr) {
  let max = -322312321;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax(arr2));

const maxVal = arr2.reduce(function (max, curr) {
  if (curr > max) max = curr;
  return max;
}, -23213223);

console.log(maxVal);

const users = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 34 },
  { firstName: "Michael", lastName: "Johnson", age: 28 },
  { firstName: "Emily", lastName: "Williams", age: 26 },
  { firstName: "David", lastName: "Brown", age: 26 },
];

const res = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const ageLessThan30 = users
  .filter(function (user) {
    if (user.age < 30) {
      return user.firstName;
    }
  })
  .map((user) => `${user.firstName} ${user.lastName}`);

const ageLessThan30UsingReduce = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(`${curr.firstName} ${curr.lastName}`);
  }
  return acc;
}, []);
console.log(res);
console.log(ageLessThan30);
console.log(ageLessThan30UsingReduce);
