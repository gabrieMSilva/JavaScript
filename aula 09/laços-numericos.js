const prompt = require("readline-sync");

// FOR ESTRUTURA DE LAÇOS CONTROLADOS

// expressao 1: define a inicializaçao do for
// expressao 2: define a permanencia do for
// expressao 3: incremento da variavel

// for(expressao 1; expressao 2; expressao 3){
//   escopo
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let numInformado;
// let maiorNum = 0;

// for (let i = 1; i <= 5; i++) {
//   numInformado = Number(prompt.question("digite um numero: "));

//   if (numInformado > maiorNum) {
//     maiorNum = numInformado;
//   }
// }

// console.log("o maior numero: ", maiorNum);

// percorrendo string com for

const nome = "gabriel";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
