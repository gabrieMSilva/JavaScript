const prompt = require("readline-sync");

// calculador de soma/multiplicaçao/divisao e subtraçao
const operacao = prompt.question(
  "qual operacao voce quer fazer: (+) (-) (*) (/): "
);
let num1 = Number(prompt.question("digite um numero: "));
let num2 = Number(prompt.question("digite um numero: "));
let resultado;

switch (operacao) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num1 / num2;
    break;
  default:
    console.log("fim");
}

console.log(resultado);
