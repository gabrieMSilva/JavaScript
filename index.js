// const fs = require('fs');
// // 1. lendo um arquivo JSON
// fs.readFileSync(
//   'caminhoDoArquivo' /* caminho do arquivo onde pegar o JSON*/,
//   (err, dados) => {
//     if (err) {
//       console.log('deu erro');
//     } else {
//       // dados com um buffer do arquivo JSON
//       const dadosObejto = JSON.parse(String(dados)); // convertendo um buffer em um obejto do JS
//       console.log(dadosObejto);
//     }
//   }
// );

// 2 convertendo JSON em formato string para um obejto

const jsonString = '{"nome": "Gabriel Miranda"}';

console.log(JSON.parse(jsonString));

// 3. CONVERTENDO UM OBEJTO EM JSON (STRING)

const pessoa = {
  nome: 'Gabriel Miranda',
  curso: 'ADS',
};

console.log(JSON.stringify(pessoa));
