// 1 array.every() = verifica se todos os elementos do arrey seguem a  mesma condiçao

const numeros = [10, 52, 58, 68];

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

const verdade = pessoas.every(
  (elementos, pessoa) => elementos > 18 && pessoa.altura < 1.7
);

console.log(verdade);
console.clear();

// 2 some = verifica se algum elementos do array torna verdadeiro uma determinada condicao da funcao

const numeros2 = [1, -2, -5, -9];

const negativos = numeros2.some((numero) => numero > 0);

console.log(negativos);

// 3 map

const numeros3 = [1, 2, 8, 16];

numeros3.map((numero) => numero * 2);
