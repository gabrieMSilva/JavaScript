// high oder function
// 1 funcao que retorna outra funcao como parametro

function welcome(curso) {
  return (aluno) => {
    console.log(`ola ${aluno} bem vindo ao curso ${curso}`);
  };
}

const saudacao = welcome("front end em react");

saudacao("Gabriel Miranda Silva");

console.clear();

// 2 funcao que recebe outra funcao como parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const operacao = (num1, num2, funcaoDaoperacao) => funcaoDaoperacao(num1, num2);

// const operacao = (10, 5, somar) => somar(10, 5);

const retorno = operacao(10, 5, somar);
console.log(retorno);

const resultado = operacao(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
