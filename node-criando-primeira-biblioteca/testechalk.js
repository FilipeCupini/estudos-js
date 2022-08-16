import chalk from 'chalk';

const log = console.log;

const danger = chalk.bold.red;
const warning = chalk.bold.yellow;
const sucess = chalk.bold.green;


log(chalk.blue(`Olá `) + `Mundo` + chalk.red(`!`));

log(chalk.blue.bgRed.bold(`Olá Mundo`));

log(chalk.blue(`Ola`, `Mundo`, `Foo`, `bar`, `biz`, `baz`));

log(chalk.red(`Olá`, chalk.underline.bgBlue(`mundo`) + `!`));

log(chalk.green(`Eu sou uma linha verde` + chalk.blue.underline.bold(` nós somos uma palavra azul`) + ` nós voltamos a ser verde`));


log(`
CPU: ${vericaPorcentagem(10)}
RAM: ${vericaPorcentagem(50)}
DISK: ${vericaPorcentagem(75)}
`);

function vericaPorcentagem(numero) {
    if (numero >= 0 && numero <= 49) {
        return sucess(numero + `%`);
    } else if (numero >= 50 && numero <= 74) {
        return warning(numero + `%`);
    } else {
        return danger(numero + `%`)
    }
}