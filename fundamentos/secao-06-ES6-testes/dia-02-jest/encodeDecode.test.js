

const {
    mapString,
    encode,
    decode,
  } = require('./encodeDecode.js');


  describe('Requisito 1', () => {
    it('encode é função', () => {
        expect(typeof encode).toEqual('function');
    });

    it('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5', () => {
        expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
    })

    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(encode('a,i,e,u,o')).not.toEqual('1,2,3,4,5');
    })

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('Andre').length).toEqual(5);
    })


    it('decode é função', () => {
        expect(typeof decode).toEqual('function');
    });

    it('teste se os números 1,2,3,4,5 são convertidas em a,e,i,o,u', () => {
        expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    })

    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(decode('1,2,3,4,5')).not.toEqual('o,u,e,i,a');
    })

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(decode('Andre').length).toEqual(5);
    })

  });