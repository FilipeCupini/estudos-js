const notas = [10 ,6 ,8];
notas.push(7); //Método push serve pra adicionar um elemento na ultima posição do Array
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)



// Refatorando com function

const nota = [];

const adicionarNumero = numero => {
    if (numero != null) {
        nota.push(numero)
    } else {
        console.log('Número não informado');
    }
}

adicionarNumero(5)
adicionarNumero(2)
adicionarNumero(10)
adicionarNumero(8)

console.log(nota)

let medias = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length;

console.log(medias)