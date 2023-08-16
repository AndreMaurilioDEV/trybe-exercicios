const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number ** 2);
//array.metodo(callback)
// number = numbers[index]

console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]
// squaredNumbers é um novo Array


/* COM FOR: const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
    squaredNumbers.push(numbers[index] ** 2);
};

console.log(squaredNumbers);
*/