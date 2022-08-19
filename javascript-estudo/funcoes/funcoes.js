const log = console.log

//DECLARAÇÃO DE FUNÇÃO
// 1) Declarar a função
                     //string passa a virar number, pois depende do que foi passado no parametro da função
function imprimirTexto(texto){
    log(texto)
}


// 2) Executa a função (1 ou + vezes)
imprimirTexto(soma())
imprimirTexto('Outro texto')

//três formas de escrever funções

function soma(){
    //outros códigos
    // o return é a ultima situação antes de fechar o bloco
    // qualquer coisa escrita após o return não ira ser executado
    return 2 + 2
}

// log(soma());

