//criei um array chamado numeros 
let numeros = [10, 20, 30, 40, 50];
//o metodo find é utilizado para encontrar o primeiro elemento no array que satisfaça uma condição.
//a função abaixo verifica se o numero é maior que 25.
let primeiroMaiorQue25 = numeros.find(num => num > 25);
console.log(primeiroMaiorQue25); 
