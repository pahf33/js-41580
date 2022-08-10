const username = "Pedro";
const password = "password";
const NUMERO = 1234;

const usernameLogin = prompt("Ingrese el usuario");
const passwordLogin = prompt("Ingrese el password");

if (usernameLogin === username && passwordLogin === password) {
  alert(username + NUMERO + password);
} else {
  alert("401 Unauthorized");
}
