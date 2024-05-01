const prompt = require("readline-sync");

const idade = prompt.question("qual a sua idade?");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

console.log(Number("x")); 
