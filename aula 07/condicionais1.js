const prompt = require("readline-sync");

//const idade = prompt.question("Qual eh sua idade? ");

//const ehMaiorDeIdade = idade >= 18;

//if (idade >= 18) {
// console.log(" voce eh maior de idade,", "sua idade:", idade);
//} else {
// console.log(" menor de idade ");
//}

////const nota1 = Number(prompt.question("qual a nota 1 do aluno: "));

//const nota2 = Number(prompt.question("qual a nota 2 do aluno: "));

//const media = (nota1 + nota2) / 2;

//if (media >= 7) {
//console.log("Aprovado!", media);
//} else if (media >= 5) {
//console.log("voce esta de prova final ");
//} else {
//console.log("Reprovado!", media);
//}

// para dirigir é preciso: ser maior de idade e ter cnh

const idade = 18;
const cnh = true;

if (idade >= 18 && cnh) {
  console.log("voce pode dirigir");
} else {
  console.log("voce nao pode dirigir");
}
