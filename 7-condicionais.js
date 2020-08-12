console.log("7 - Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhado = false;

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

console.log("Destinos possiveis:");

console.log(listaDeDestinos);