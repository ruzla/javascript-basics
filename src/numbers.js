//Good job!
const add = (a, b) => {
  return a + b;
};

//Good job!
const subtract = (a, b) => {
  return a - b;
};

//Good job!
const multiply = (a, b) => {
  return a * b;
};

//Good job!
const divide = (a, b) => {
  return a / b;
};

////Good job! Could have also used the Math.pow() method instead of **. For future reference ** isn't recognised in Internet Explorer.
const power = (a, b) => {
  return a ** b;
};

//Good job!
const round = (a) => {
  return Math.round(a);
};

//Good job!
const roundUp = (a) => {
  return Math.ceil(a);
};

//Good job!
const roundDown = (a) => {
  return Math.floor(a);
};

//Good job!
const absolute = (a) => {
  return Math.abs(a);
};

// In this instance you may want to steer clear from the double tilde as it's a bit confusing. It does make the code more consice but it's difficult to understand if you don't know what it does.
// Math.trunc(a / b) would have been easier to understand.
const quotient = (a, b) => {
  return ~~(a/b);
};

//Good job!
const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
