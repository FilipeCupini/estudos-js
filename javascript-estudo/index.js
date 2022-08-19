import chalk from 'chalk';

const erro = chalk.bold.red;
const sucess = chalk.bold.green;
const padrao = chalk.blue;
const log = console.log;


let idade = 17;



log(padrao(`Olá Mundo!`));

const frase = `Essa é a frase para ser exibida`;

function mostrarFrase(string){
    return string;
}

console.log(mostrarFrase(frase));


function verificaIdade(idade){
    log(idade >= 18 ? sucess(`Maior de idade`) : erro(`Menor de idade`)) //Operação ternária
    // if(idade >= 18){
    //     console.log(correto(`Maior de idade`))
    // } else {
    //     console.log(erro(`Menor de idade`))
    // }
}

verificaIdade(idade)