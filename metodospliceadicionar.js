//criei uma array com varios elementos
let array = ['a', 'b', 'c', 'd'];
//estou adicionando o elemento x no indice 2
//o 0 indica que não quero remover nenhum elemento antes de adicionar x.
array.splice(2, 0, 'x');
//depois de executar o splice, o console.log mostra o array
console.log(array);