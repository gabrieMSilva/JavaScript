// o switch é muito ultil quando a variavel tem valores especificos
const prompt = require("readline-sync");
const permissoes = "aluno" || "professor" || "admin";

console.log(prompt.question("digite qual seu cargo: "));

switch (permissoes) {
  case "aluno":
    console.log("voce é um aluno");
    break;
  case "professor":
    console.log("voce é o professor");
    break;
  case "admin":
    console.log("voce é o admin ");
    break;
  default:
    console.log("n sei quem voce é ");
}
