// FUNCOES DE ALTA ORDEM EM ARRAYS

// 1 array.forEach()

const numeros = [10, 52, 58, 68];

numeros.forEach((elemento, index, arrayCompleto) => {
  console.log(elemento, index, arrayCompleto);
});

// 2 array.find() : util para encontrar um elemento dentro do array

const encontrado = numeros.find((item) => {
  return item > 50;
});

console.log(encontrado);

// array de objetos

const pessoas = [
  {
    idade: 70,
    nome: "pessoa 1",
    altura: 1.71,
  },

  {
    nome: "pessoa 2",
    idade: 47,
    altura: 1.65,
  },

  {
    nome: "pessoa 3",
    idade: 25,
    altura: 1.78,
  },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade < 50);
console.log(pessoaEncontrada);
console.clear();

// 3 array.prototype.findIndex = muito parecido com o find() so que porem retorna o indice do elemento

const indicepessoaEncontrada = pessoas.findIndex(
  (pessoa) => pessoa.idade > 80 && pessoa.altura < 1.55
);

console.log(indicepessoaEncontrada);
