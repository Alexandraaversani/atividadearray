//criei um array chamado numeros
let numeros = [15, 20, 25, 30, 35];
//o metodo some verifica se pelo menos um elemento satisfaz a condição
let temMaiorQue40 = numeros.some(num => num > 40);
//exibe o resultado true caso pelo menos um elemento satisfaça a condição, caso contrário exibe false.
console.log(temMaiorQue40); 