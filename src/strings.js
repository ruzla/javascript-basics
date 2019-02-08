const sayHello = (string) => {
  // your code here
};

const uppercase = (string) => {
  string = string.toUpperCase();
  return string;
};

const lowercase = (string) => {
  string = string.toLowerCase();
  return string;
};

const countCharacters = (string) => {
  return string.length;
};

const firstCharacter = (string) => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  // your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
