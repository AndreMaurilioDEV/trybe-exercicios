const verificaNotas = (nota1, nota2, nota3, nota4) => {
    if(typeof nota1 !== 'number' || typeof nota2 !== 'number' || typeof nota3 !== 'number' || typeof nota4 !== 'number' ){
        throw new Error('Digite uma nota válida!!');
    }
}

const mediaNotas = (nota1, nota2, nota3, nota4) => {
    try {
        verificaNotas(nota1, nota2, nota3, nota4);
        return media = (nota1 + nota2 + nota3 + nota4)/ verificaNotas.length
    } catch(error){
       return error.message;
    }
}

console.log(mediaNotas(5,10,'7',8));

