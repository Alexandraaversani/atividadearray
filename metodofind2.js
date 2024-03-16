//criei um array chamado numeros 
let numeros = [10, 20, 30, 40, 50];
//o metodo find é utilizado para encontrar o primeiro elemento no array que satisfaça uma condição.
//a função abaixo verifica se o numero é maior que 15.
let primeiroMaiorQue15 = numeros.find(num => num > 15);
console.log(primeiroMaiorQue15); 
