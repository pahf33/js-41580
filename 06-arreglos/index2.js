// llenar usando push
const numeros = [];
for (let index = 1; index <= 100; index = index + 1) {
  numeros.push(index);
}
console.log("numeros ", numeros);

// recorrer
let suma = 0;
for (let index = 0; index < numeros.length; index++) {
  const numero = numeros[index];
  suma = suma + numero;
}
console.log("suma ", suma);

// pop: elimina el último elemento
// programa que elimina, usando pop, los números pares entre 1 y 100.
let popCounter = 0;
for (let i = numeros.length - 1; i >= 0; i--) {
  if (numeros[i] % 2 != 0) {
    for (let j = numeros.length - 1 - popCounter; j >= 0; j--) {
      if (numeros[j] % 2 == 0) {
        sendToLastPosition(numeros, j);
        numeros.pop();
        popCounter++;
        break;
      }
    }
  }
}
// función que intercambia los elementos de un arreglo. Intercambia
// el valor de la posición 'startIndex' con el valor de la última posición
function sendToLastPosition(array, startIndex) {
  const lastIndex = array.length - 1;
  const tmp = numeros[lastIndex];
  numeros[lastIndex] = numeros[startIndex];
  numeros[startIndex] = tmp;
}
console.log("numeros impares ", numeros);
