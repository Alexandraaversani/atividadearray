//criei um array chamado numeros
let numeros = [10, 20, 30, 40, 50];
//o metodo every verifica se todos os elementos do array satisfazem uma condição.
//a função verifica se cada num é maior que 5
let todosMaiorQue5 = numeros.every(num => num > 5);
//exibe o resultado. Caso satisfaça a condição retorna true, caso contrário false.
console.log(todosMaiorQue5); 