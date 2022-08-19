let message = console.log;
 
 
 const soma = (n1, n2) => {
     if (n1 > 10 || n2 > 10) {
        return message('numero de 1 a 9');
     } else {
        return message(n1 + n2);
     }
     
 }

 const sub = (n1, n2) => {
     message(n1 - n2);
 }

 export {
     soma,
     sub
 }