//metodo filter
//um array de numeros é declarado e inicializado com os valores
let numeros = [50, 100, 150, 200, 250];
//no let numerosMaioresQueCem vai acontecer a filtragem dos numeros maiores que 100
let numerosMaioresQueCem =
numeros.filter(numero => numero > 100);
//exibe o resultado dos numeros maiores que 100
console.log(numerosMaioresQueCem);