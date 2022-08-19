const notas = [10, 7, 8, 5, 10];
notas.pop(); // remove sempre o último dado do array, não aceita nenhum parametro
console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`)