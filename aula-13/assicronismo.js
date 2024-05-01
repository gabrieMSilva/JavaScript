const fs = require('fs');

const { resolve } = require('path');
const { reject } = require('q');

// callbacks

// fs.readFile("aula-13/arquivo.txt", (err, data) => {
//   if (err) {
//     console.log("ocorreu um erro", err);
//   } else {
//     console.log(String(data));
//   }
// });

// exemplo SETTIMEOUT
// console.log("antes do timeout");
// setTimeout(() => {
//   console.log("isso aqui demora 5 segundos");
// }, 2 * 5000);

// console.log(" depois do timeout ");

// PROMISSES
console.log('antes da promisse');

function lerArquivos() {
  return new Promise((resolve, reject) => {
    fs.readFile('aula-13/arquivo.py', (err, data) => {
      if (err) {
        reject('ocorreu um erro', err);
      } else {
        resolve(String(data));
      }
    });
  });
}
// FOCO A PARTIR DAQUI
// lerArquivos()
//   .then((retornoDoResolve) => {
//     console.log("deu certo ", retornoDoResolve);
//   })
//   .catch((err) => {
//     console.log("deu erro ", err);
//   })
//   .finally(() => {
//     console.log(
//       "isso vai ser executado independente do resultado da promessa "
//     );
//   });

// ASYNC/AWAIT

async function leituraDeArquivos() {
  console.log('antes do await');

  try {
    const retordoDaPromise = await lerArquivos();

    console.log(retordoDaPromise);
    console.log(' depois do await');
  } catch (err) {
    console.log(err);
    console.log(' isso aqui é executado se tiver um erro');
  } finally {
    console.log('isso vai ser executado de qualquer forma');
  }
}
leituraDeArquivos();
