
const myFizzBuzz = require('./myFizzBuzz');

describe('Teste myFizzBuzz', () => {
    it('Testa o retorno esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(25)).toBe('buzz');
        expect(myFizzBuzz(11)).toBe(11);
        expect(myFizzBuzz('string')).toBeFalsy();
    })
})