//Good use of template literals! Good job.
const sayHello = (string) => {
  return `Hello, ${string}!`;
};

//Good job!
const uppercase = (string) => {
  return string.toUpperCase();
};

//Good job!
const lowercase = (string) => {
  return string.toLowerCase();
};

//Good job!
const countCharacters = (string) => {
  return string.length;
};

//Good job!
const firstCharacter = (string) => {
  return string.charAt(0);
};

//It works but using a for loop is probably over kill for this task.
// string.charAt(n);
// would have sufficed.
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
