import { imprimirTexto } from "./funcoes.js";

const log = console.log;            

// Parametros de função: 

function soma(n1, n2){
    return n1 + n2;
}

// log(soma(2,2))


// Parametros X Argumentos
// ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

// log(nomeIdade(22, 'Filipe'))

function multiplicar(n1, n2){
    return n1 * n2;
}

log(multiplicar(soma(4,5), soma(4,2)))


