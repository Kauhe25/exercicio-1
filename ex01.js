"use strict";
let retorno = apresentar('Kauhe');
console.log(retorno);
function apresentar(nome) {
    return `Prazer, sou ${nome}!`;
}
const objeto = {
    nome: "",
    numero: 0
};
if (objeto) {
    console.log("caiu no IF");
}
else {
    console.log("caiu no ELSE");
}
