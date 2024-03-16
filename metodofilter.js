//metodo filter
//um array de numeros é declarado e inicializado com os valores
let numeros = [50, 60, 70, 80, 90];
//no let numerosMaioresQueSetenta vai acontecer a filtragem dos numeros maiores que 70
let numerosMaioresQueSetenta =
    numeros.filter(numero => numero > 70);
//exibe o resultado dos numeros maiores que 70
console.log(numerosMaioresQueSetenta);
