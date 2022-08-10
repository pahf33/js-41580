## Ejercicio 1

Quiero hacer un formulario de inicio de sesión pero aún no sé cómo crearlo.
De momento, solamente puedo usar prompt.

Entonces, quiero recibir un username y una contraseña y comprobar si
el usuario y contraseña ingresado coincide con mi base de datos.
La base de datos de momento solo cuenta con un usuario.

El programa me debe retornar, en caso de que
el usuario ingresado exista, mediante un alert, un token de autenticación.
La regla para construir el token del usuario es:

- el username se concatena con un número constante
  definido anteriormente por mí y con la contraseña.
  Ejemplo: _username56784password_

En caso de que el usuario no exista, el alert debe retornar un mensaje
que diga: _401 Unauthorized_

## Ejercicio 2

Quiero hacer una solicitud de tarjeta de crédito.
En el banco me piden brindar la siguiente información

- Nombre
- Número de documento de identificación
- Ingresos totales mensuales
- Suma de gastos mensuales
- Preguntar si tiene otra tarjeta de crédito. En caso de que sí, cuál es el cupo otorgado.
- Preguntar si es empleado o independiente.
- En caso de que sea empleado, bajo qué tipo de contrato.
- En caso de que sea independiente, cuál es su actividad económica (Por simplicidad, es un código de 1 a 5).

El banco me debe indicar si me aprueban o no la tarjeta.
El banco usa el siguiente algoritmo para decidir:

- Si tiene otra tarjeta y el cupo equivale a 2.5 veces o más sus ingresos, entonces se rechaza.
- Si la diferencia entre los ingresos y los gastos es menor a la mitad de sus ingresos, se rechaza.
- Si es independiente y si la actividad económica es menor o igual a 3 y si tiene ingresos menores a 1000 USD, se rechaza.
- Si es empleado pero su contrato es como contratista y tiene ingresos menores a 500 USD, se rechaza.
- Si el número de identificación no es par, se rechaza.

## Ejercicio 3

Con las mismas condiciones del ejercicio 2, proponer y desarrollar un algoritmo que me indique cuánto cupo me aprueban.
