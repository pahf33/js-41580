/*
    Quiero hacer un formulario de inicio de sesión pero aún no sé cómo crearlo.
    De momento, solamente puedo usar prompt.

    Entonces, quiero recibir un username y una contraseña.
    El programa me debe retornar, mediante un alert, un token de autenticación.
    La regla para construir el token del usuario es:
        el username se concatena con un número constante
        definido anteriormente por mí y con la contraseña.
        Ejemplo: username56784password
*/
const username = prompt("Ingrese el username");
const password = prompt("Ingrese la contraseña");

const VALUE = 4566576;
alert(username + VALUE + password);
