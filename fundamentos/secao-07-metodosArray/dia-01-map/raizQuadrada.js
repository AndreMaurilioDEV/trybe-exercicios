const numbers = [4, 9, -1, 16, -5, 25];

const newNumbers = numbers.map((number) => {
    const calc = number ** 2;
    return calc;
});

console.log(newNumbers);

