const { log } = require("console");

const hydrate = (string) => {
    const split = string.split('');
    let nBebida;
    let copo = 0;
   for (let index = 0; index < split.length; index++) {
    nBebida = parseInt(split[index]);
    if(nBebida){
        copo += nBebida;
        
    }
   }

   if(copo > 1){
    return `${copo} copos de água`
   }else{
    return `${copo} copo de água`
   }

   
   
};

module.exports = hydrate;