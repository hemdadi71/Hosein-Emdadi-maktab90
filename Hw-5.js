'use strict';
const array = [
  {
    name: 'ali',
    age: 25,
  },
  {
    name: 'mohsen',
    age: 20,
  },
  {
    name: 'hosein',
    age: 29,
  },
  {
    name: 'mohammad',
    age: 10,
  },
];
const sortByAge = arr => {
  arr.sort((a, b) => a.age - b.age);
  return arr;
};
console.log(sortByAge(array));
