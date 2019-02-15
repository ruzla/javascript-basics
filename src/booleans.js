//Good job!
const negate = (a) => {
  return !a;
};

//Good job!
const both = (a, b) => {
  return a && b;
};

//Good job!
const either = (a, b) => {
  return a || b;
};

//Good job!
const none = (a, b) => {
  return !a && !b;
};

//Good job!
const one = (a, b) => {
  return a !== b;
};

//Good job!
const truthiness = (a) => {
  return Boolean(a);
};

//Good job! Watch your spacing a === b.
const isEqual = (a, b) => {
  return a===b;
};

//Good job!
const isGreaterThan = (a, b) => {
  return a > b;
};

//Good job!
const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

// You've already asked if the remainder is equal to 0 here (true or false) so a ternary operator isn't needed on the end.
// a % === 1
// is all you need
const isOdd = (a) => {
  return (a % 2 === 0 ? false : true);
};

// Same as above, except you want:
// a % 2 === 0
// for even numbers
const isEven = (a) => {
  return (a % 2 === 0 ? true : false);
};

// Same here. Ternary operator isn't needed on the end.
// Math.sqrt(a) % 1 === 0
const isSquare = (a) => {
  return (Math.sqrt(a) % 1 === 0 ? true : false);
};

// Same again. 
// string.charAt(0) === char
const startsWith = (char, string) => {
  return (string.charAt(0) === char ? true : false);
};

//Good use of regex and .match here.
const containsVowels = (string) => {
  string = string.toLowerCase();
  return (string.match(/[aeiou]/) ? true : false);
};

  
//Yep, again, good use of regex. Well done.
const isLowerCase = (string) => {
  return (string.match(/[A-Z]/) ? false : true);
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
