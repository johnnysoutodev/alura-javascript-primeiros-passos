console.log("7 - Condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1,1);
} else {
    console.log("Não é maior de idade e não posso vender.");
}

console.log("Destinos possiveis:");

console.log(listaDeDestinos);