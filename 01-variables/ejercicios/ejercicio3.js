/* 
    Hubo una reunión entre 4 compañeros con nacionalidad distinta. 
    Fuimos a comer y nos tomamos bastantes tragos.
    Pero, cuando nos llegó la cuenta, estábamos muy borrachos y se nos
    dificultó dividir la cuenta en partes iguales. 
    Además que la cuenta estaba en USD (considerar los centavos).
    El camarero tenía un programa para dividir la cuenta entre cualquier cantidad de personas.
    Sin embargo, le tocaba ingresar uno a uno los valores de la cuenta para que así le arrojara el resultado.
    Fueron 4 platos y 4 botellas.
    Al colombiano, en su borrachera, le causó curiosidad a cuánto equivalía en COP (pesos colombianos)
    toda la cuenta, a lo cual el camarero le dio el valor de acuerdo a la tasa del momento.

    Podemos replicar el programa del camarero?
*/
const people = parseInt(prompt("Ingrese cantidad de personas"));
const foodValue1 = parseFloat(prompt("Ingrese valor del plato 1"));
const foodValue2 = parseFloat(prompt("Ingrese valor del plato 2"));
const foodValue3 = parseFloat(prompt("Ingrese valor del plato 3"));
const foodValue4 = parseFloat(prompt("Ingrese valor del plato 4"));
const drinkValue1 = parseFloat(prompt("Ingrese valor de la bebida 1"));
const drinkValue2 = parseFloat(prompt("Ingrese valor de la bebida 2"));
const drinkValue3 = parseFloat(prompt("Ingrese valor de la bebida 3"));
const drinkValue4 = parseFloat(prompt("Ingrese valor de la bebida 4"));

const valueForEveryone =
  (foodValue1 +
    foodValue2 +
    foodValue3 +
    foodValue4 +
    drinkValue1 +
    drinkValue2 +
    drinkValue3 +
    drinkValue4) /
  people;

console.log("El valor que debe pagar cada uno es ", valueForEveryone); // también puedo concatenar separando con comas
const USDToCOP = 4301.25;
const totalInCOP =
  (foodValue1 +
    foodValue2 +
    foodValue3 +
    foodValue4 +
    drinkValue1 +
    drinkValue2 +
    drinkValue3 +
    drinkValue4) *
  USDToCOP;

console.log("El total de la cuenta, en COP, es: ", totalInCOP);
