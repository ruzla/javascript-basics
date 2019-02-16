/* 
  your code is correct, but there is a shorter way to set properties on an object
  you can simply set them at the point of creation

  const person = {
    name: name,
    age: age
  };
*/
const createPerson = (name, age) => {
  const person = {};
  person.name = name;
  person.age = age; 
  return person;
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  /* brackets are unnecessary around (person.age > 65)  */
  return (person.age > 65) ? true : false;
};

const getAges = (people) => {
  // you can also do this with a .map()
  // return people.map(person => person.age);
  const age = [];
  for (let i = 0; i < people.length; i++){
    age.push(people[i].age);
  };
  return age;
};

const findByName = (name, people) => {
  return people.find(findPerson => findPerson.name === name);
};

const findHondas = (cars) => {
  return cars.filter(findManufacturer => findManufacturer.manufacturer === 'Honda');
};

const averageAge = (people) => {
  const ages = [];
  let total = 0;
 
  for (let i = 0; i < people.length; i++){
    ages.push(people[i].age);
  };

  for (let i = 0; i < ages.length; i++){
    total = total + ages[i];
  };
  // nothing wrong with 2 for loops approach but
  // this logic can be achieved with a .reduce() as well if you want to attemp it as a challenge
  return total/ages.length;

};

const createTalkingPerson = (name, age) => {
  const person = {};
  person.name = name;
  person.age = age;

  person.introduce = () => {
    return `Hi Fred, my name is ${person.name} and I am ${person.age}!`;
  };
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
