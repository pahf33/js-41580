// llenar usando push
const numeros = [];
for (let index = 1; index <= 100; index = index + 1) {
  numeros.push(index);
}
console.log("numeros ", numeros);

console.log("método toString ", numeros.toString());

// shift: remueve el primer elemento de un arreglo
numeros.shift();
console.log(numeros);

// unshift: inserta elementos al inicio del arreglo
numeros.unshift(1000, 1001);
console.log(numeros);

// includes: devuelve true o false si el arreglo incluye el valor ingresado como argumento
console.log(numeros.includes(980));

// slice: obtiene un sub arreglo a partir de otro arreglo
console.log(numeros.slice(0, 10)); // obtiene los 10 primeros números

// indexOf: retorna el indice en el cual está ubicado el elemento pasado como argumento
console.log(numeros.indexOf(10));

// reverse: invierte el arreglo
console.log(numeros.reverse());
