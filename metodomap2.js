//criei um array chamado numeros que contem numeros de 6 a 10.
let numeros = [6, 7, 8, 9, 10];
//o metodo map é utilizado para criar um novo array com base em outro que já existe.
//o simbolo => é chamado de função de seta, e significa que para cada elemento "num" passado pela função, o resultado será o próprio "num" multiplicado por 2.
let dobrados = numeros.map(num => num * 2);
//exibe o resultado de array dobrados.
console.log(dobrados);