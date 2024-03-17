//criei um array com varios elementos
let array = ['a', 'b', 'c', 'd', 'e'];
//o 2 indica o indice do elemento que quero substituir.
//o 1 indica que quero remover um elemento a partir do indice 2 antes de adicionar um novo elemento.
//o x é o elemento que quero adicionar no lugar do elemento removido
array.splice(2, 1, 'x');
//exibe o resultado depois de executar o splice.
console.log(array);