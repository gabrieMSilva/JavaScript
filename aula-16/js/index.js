// Fetch API

// then/ catch
fetch('https://viacep.com.br/ws/01001000/json/')
  .then((resposta) => {
    resposta.json().then((dados) => console.log(dados));
  })
  .catch((err) => {
    console.log(err);
  });

// async/await

async function obterDados() {
  try {
    const resposta = await fetch('https://viacep.com.br/ws/64023500/json/');

    const dados = await resposta.json();

    console.log(dados);
  } catch (err) {
    console.log(err);
  }
}

obterDados();
