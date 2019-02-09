const getNthElement = (index, array) => {
  if (index > array.length - 1){
    index = index - array.length;
    return array[index];
  } else {
  return array[index];
  }
};

const arrayToCSVString = (array) => {
  csvString ='';
  for (let i = 0; i < array.length; i++){
   if (i < array.length - 1){
    csvString = csvString + array[i] + ',';
   } else {
    csvString = csvString + array[i]; 
   } 
  }
  return csvString;
};

const csvStringToArray = (string) => {
  //The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const Array2 = array.concat(element);
  return Array2;
};

const removeNthElement = (index, array) => {
  // your code here
};

const numbersToStrings = (numbers) => {
  // your code here
};

const uppercaseWordsInArray = (strings) => {
  // your code here
};

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
