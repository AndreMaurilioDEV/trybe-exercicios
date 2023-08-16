const average = (arrayNumeros) => {
    let somaArray = 0;
    if(arrayNumeros !== 'number'){
      return undefined;
    }
  
    if(!arrayNumeros){
      return undefined;
    }
    for (let index = 0; index < arrayNumeros.length; index++) {
       if(arrayNumeros){
        somaArray += arrayNumeros[index];
       }
    }
    return somaArray / arrayNumeros.length;
    }

  
