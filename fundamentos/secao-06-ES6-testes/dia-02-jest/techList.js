
const techList = (tecnologias, name) => {

    if (tecnologias.length === 0) return 'Vazio!';
    let tecArray = [];
    let objetos;
    for (let index = 0; index < tecnologias.length; index++) {
        objetos = { tech: tecnologias.sort()[index], name: name }
        tecArray.push(objetos);
    }
    return tecArray;
};
module.exports = techList;
