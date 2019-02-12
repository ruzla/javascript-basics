const getNthElement = (index, array) => {
  if (index > array.length - 1){
    index = index - array.length;
    return array[index];
  } else {
  return array[index];
  };
};

const arrayToCSVString = (array) => {
  // csvString ='';
  // for (let i = 0; i < array.length; i++){
  //  if (i < array.length - 1){
  //   csvString = csvString + array[i] + ',';
  //  } else {
  //   csvString = csvString + array[i]; 
  //  } 
  // }
  // return csvString;
  return array.join(',');
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
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  //return numbers.toString().split(',');
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  // for (let i = 0; i < strings.length; i++) {
  //   strings[i] = strings[i].toUpperCase();
  // }
  // return strings;
  return strings.map((item) => item.toUpperCase())
};

const reverseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++){ 
   strings[i] = strings[i].split('').reverse().join('');
 };
 return strings;
};

const onlyEven = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     while (numbers[i] % 2) {
//         numbers.splice(i, 1);
//     };
// };
// return numbers;
 return numbers.filter(a=>numbers.indexOf(a)%2===1);
};

const removeNthElement2 = (index, array) => {
  const removeNthElement2 = array.filter(a => a !== array[index]);
  return removeNthElement2;
};

const elementsStartingWithAVowel = (strings) => {
  // const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // const elementsStartingWithAVowel =[];
  // for (let i = 0; i < strings.length; i++) {
  //   for (let a = 0; a < vowels.length; a++){
  //   if (strings[i].charAt(0) === vowels[a]){
  //     elementsStartingWithAVowel.push(strings[i]);
  //   };
  // }; 
  // };
  // return elementsStartingWithAVowel;
  return (strings.filter(str => /^[aeiou]/i.test(str)));
};

const removeSpaces = (string) => {
  return string.replace(/\s/g, '');
};

const sumNumbers = (numbers) => {
  // let total = 0;
  // for (let i = 0; i < numbers.length; i++){
  //   total = total + numbers[i];
  // };
  // return total;
  return numbers.reduce((a, b) => a + b, 0);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
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
