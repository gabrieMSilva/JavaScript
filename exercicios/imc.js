const prompt = require("readline-sync");

//calcular o peso e mostrar se a pessoa esta com peso normal , sobrepeso ou obeso
const peso = Number(prompt.question("Qual seu peso: "));
const altura = Number(prompt.question("Qual sua altura: "));
let media = peso / (altura * altura);

// if (media <= 24) {
//   console.log("Você está com peso normal!", media);
// }
// if (media <= 29) {
//   console.log("Você está com sobrepeso:", media);
// }
// if (media >= 34) {
//   console.log("Você está obeso:", media);
// }

if (media <= 24) {
  console.log("voce esta com o peso normal", media);
} else if (media <= 39) {
  console.log("voce esta sobpeso", media);
} else if (media >= 39) {
  console.log("voce esta obeso ", media);
}
