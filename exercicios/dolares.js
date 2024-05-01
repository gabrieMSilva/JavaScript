const prompt = require("readline-sync");

// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

let saldo = Number(prompt.question("digite o seu saldo: "));

let conversor = saldo / 5.19;

console.log(conversor);
