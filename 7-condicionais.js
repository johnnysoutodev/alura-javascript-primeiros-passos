console.log("7 - Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhado = false;
const temPassagenComprada = true;

/*
if (idadeComprador >= 18) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1,1);
    } else if (estaAcompanhado ==  true){
        // A pessoa é menor de idade.
        listaDeDestinos.splice(1,1);
        console.log("Não é maior de idade, mas esta acompanhada.");
    } else {
        console.log("Não é maior de idade e não posso vender.");
}
*/

/*
if (idadeComprador >= 18 || estaAcompanhado ==  true) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1,1);
    } else {
        console.log("Não é maior de idade e não posso vender.");
}
*/

if (idadeComprador >= 18 && temPassagenComprada == true) {
    console.log("Embarque: \n");
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.");
}

// console.log("Destinos possiveis:");

// console.log(listaDeDestinos);