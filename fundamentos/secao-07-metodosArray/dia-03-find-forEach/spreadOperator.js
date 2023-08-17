// CÓPIA 

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

// CONCATENAÇÃO

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// ARGUMENTO PRA FUNCTION

const sumNumbers = (num1, num2, num3) => num1 + num2 + num3;

const numbers = [1, 2, 3];
const result = sumNumbers(...numbers);

console.log(result); // 6

// EM OBJETOS

const person = { name: 'John', age: 30 };
const additionalInfo = { occupation: 'Engineer', country: 'FRA' };

const mergedObject = { ...person, ...additionalInfo };

console.log(mergedObject);
// { name: 'John', age: 30, occupation: 'Engineer', country: 'FRA' }