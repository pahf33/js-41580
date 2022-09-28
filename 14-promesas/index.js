const usernameDB = "pedro";
const passwordDB = "password";
const login = (username, password) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    usernameDB == username && passwordDB == password
      ? resolve({ token: "token" })
      : reject("Error 401: Not authorized");
  });
};

// login("pedro", "passwor")
//   .then((response) => {
//     console.log(response);

//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     promiseLista = true;
//   });

const getToken = async () => {
  const userInfo = await login("pedro", "passwor").catch((error) => {
    throw new Error("esto es un error");
  });
  console.log(userInfo.token);
};

getToken();
