const prompt = require("readline-sync");

//  [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
//  fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
//  já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
//  quantos dias de vida um fumante perderá e exiba o total em dias.

let anosFumado = Number(prompt.question("quantos anos voce fuma: "));
let qtdCigarros = Number(
  prompt.question("quantos cigarros voce fuma por dia: ")
);
let diasPerdidos = (qtdCigarros * 10) / 60;
let diasPerd = (anosFumado * 365) / 12;

//  a cada cigarro fumado o fumante perde 10 min de vida

console.log(diasPerdidos, "dias perdidos");

// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

// let velocidadeDoCarro = Number(prompt.question("qual a velocidade do carro: "));

// let multa = velocidadeDoCarro - 80;
// let multaKm = multa * 5;

// if (velocidadeDoCarro > 80) {
//   console.log("multa no valor ", multaKm);
// } else {
//   console.log("limpo!!");
// }
