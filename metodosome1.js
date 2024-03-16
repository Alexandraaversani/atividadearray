//criei um array chamado numeros
let numeros = [10, 20, 30, 40, 50];
//o metodo some verifica se pelo menos um elemento satisfaz a condição
let temMaiorQue25 = numeros.some(num => num > 25);
//exibe o resultado true caso pelo menos um elemento satisfaça a condição, caso contrário exibe false.
console.log(temMaiorQue25); 