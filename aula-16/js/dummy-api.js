// pegar usuarios

// async function getUsers() {
//   try {
//     const usuarios = await fetch("https://dummyapi.io/data/v1/user", {
//       headers: {
//         "app-id": "662af71725ee43566ea7ea72",
//       },
//     });

//     const todosUsuarios = await usuarios.json();
//     console.log(todosUsuarios);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getUsers();

// async function getUser() {
//   try {
//     const resposta = await fetch(
//       "https://dummyapi.io/data/v1/user/662b072b1846fb751dd1d1cf",
//       {
//         headers: {
//           "app-id": "662af71725ee43566ea7ea72",
//         },
//       }
//     );

//     const user = await resposta.json();
//     console.log(user.data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUser();

// async function createUsers() {
//   const userData = {
//     firstName: "gabriel",
//     lastName: "silva",
//     email: "jate.2334@teste.com",
//   };

//   try {
//     await fetch("https://dummyapi.io/data/v1/user/create", {
//       method: "POST",
//       headers: {
//         "app-id": "662af71725ee43566ea7ea72",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// createUsers();

// deletando um usuario

async function deleteUser() {
  try {
    await fetch("https://dummyapi.io/data/v1/user/662b072b1846fb751dd1d1cf", {
      method: "DELETE",
      headers: {
        "app-id": "662af71725ee43566ea7ea72",
      },
    });
  } catch (err) {
    console.log(err);
  }
}

deleteUser();
