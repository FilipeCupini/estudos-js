function apresentar(nome) {
    return `meu nome é ${nome}`;
};

//Arrow function --

//Arrow function com + de 1 linha de instrução
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return `Somente números de 1 a 9`;
    } else {
        return num1 + num2;
    }
}

var nome = 'Filipe'
var num1 = 2;
var num2 = 11;
const log = console.log;

log(apresentar(nome));
log(apresentarArrow(nome));
log(soma(num1, num2))
log(somaNumerosPequenos(num1, num2))

