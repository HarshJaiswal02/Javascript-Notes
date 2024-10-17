const radius = [2, 4, 1, 5];

const calculateArea = (radius) => {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    let area = Math.PI * radius[i] * radius[i];
    output.push(area);
  }

  return output;
};
const ans = calculateArea(radius);

console.log(ans);

const calculateCircumference = (radius) => {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    let area = Math.PI * 2 * radius[i];
    output.push(area);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = (radius) => {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    let area = 2 * radius[i];
    output.push(area);
  }
  return output;
};

console.log(calculateDiameter(radius));
