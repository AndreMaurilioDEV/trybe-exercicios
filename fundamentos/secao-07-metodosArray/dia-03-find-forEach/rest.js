
// REST - podemos passar quantos argumentos quisermos para a função sem precisar definir todos eles individualmente como parâmetros separados(...)

const calcTotal = (...numbers) => {
    let total = 0;
  
    numbers.forEach((number) => {
      total += number;
    });
  
    return total;
  };
  
  console.log(calcTotal(10, 20, 30)); // 60
  console.log(calcTotal(756, 2, 3000, 23)); // 3781
  console.log(calcTotal(98,5,554,45));