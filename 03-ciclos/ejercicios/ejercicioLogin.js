/*
  Ejecuta un ciclo 3 veces para representar que el usuario tiene 3 intentos
  para hacer login. Si en uno de los intentos no acierta, se le indica al usuario
  que se ha equivocado y que le quedan N intentos.
  Cuando ya no le quedan intentos, se envía el mensaje de Unauthorized
  En caso de acertar antes de los 3 intentos, se envía el token y se sale con un break.
*/

const username = "Pedro";
const password = "password";
const NUMERO = 1234;

for (let index = 0; index < 3; index++) {
  const usernameLogin = prompt("Ingrese el usuario");
  const passwordLogin = prompt("Ingrese el password");
  if (usernameLogin === username && passwordLogin == password) {
    alert(username + NUMERO + password);
    break;
  } else {
    console.log(
      "Contraseña equivocada. Intente de nuevo. Le quedan ",
      2 - index
    );
  }
  if (index == 2) {
    alert("401 Unauthorized");
  }
}
