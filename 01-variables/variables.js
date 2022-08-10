// Podemos declarar variables usando let. Nos permite crear el espacio de memoria
// sin necesidad de asignarle un valor desde el principio.
let firstName;

let age = 5; // Inicializar: Declarar y a la vez asignarle un valor.

const year = 2022; // Es una variable que no cambiará de valor a lo largo de la ejecución del programa.

age = 12; // asignando otro valor a una variable.
age = 5 + 5 + 5 + 5; // recordar que primero se resuelve todo lo de la derecha y luego sí se asigna.

// imprimiendo age. Tener en cuenta que el valor que va a mostrar será el último asignado
console.log(age); // 20

console.log(year); // 2022

// firstName no tiene valor asignado. Por lo tanto, su valor es undefined.
console.log(firstName); // undefined
