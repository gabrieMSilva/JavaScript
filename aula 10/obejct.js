const pessoa = {
  nome: "gabriel",
  idade: 21,
  altura: 1.78,
  ehprogamador: true,
  hobbies: ["jogar", "academia", "beber"],
  imprimirAlgo: () => {
    console.log("estou aqui");
  },
};

console.log(pessoa.ehprogamador);
console.log(pessoa.altura);

delete pessoa.altura;

console.log(pessoa);
console.clear();

pessoa.imprimirAlgo();

const idade = 21;
const altura = 1.78;

const objeto = {
  idade,
  altura,
};

console.log(objeto);

const { nome } = pessoa;

console.log(nome);
