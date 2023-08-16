// Temperaturas em graus Celsius
//Dado um array de temperaturas em graus Celsius, crie uma função que retorne um novo array com as temperaturas convertidas para Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.
const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperaturasFahrenheit = temperaturesCelsius.map((temp) => {
    const conversion = (temp * 9/5) + 32;
    return conversion;
});

console.log(temperaturasFahrenheit);