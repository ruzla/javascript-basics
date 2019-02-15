const sayHello = (string) => {
  return `Hello, ${string}!`;
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
  newString = '';
  for (let i = 0; i < n; i++){
    newString = newString + string.charAt(i);
  };
  return newString;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
