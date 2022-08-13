// 456
// iteración 1
// i = 1
// let divisor = 10 * i;
// let digito = numero % divisor;
// suma = suma + digito;

// i = 10;
// divisor = 10 * i;
// digito = numero % divisor;
// resultado = parseInt(digito / i);
// suma = suma + resultado;
// console.log(suma);

let numero = parseInt(prompt("Ingrese un número"));
let suma = 0;

for (let i = 10; i < numero * 10; i *= 10) {
  let digito = numero % i;
  let resultado = parseInt(digito / (i / 10));
  suma = suma + resultado;
}
console.log(suma);
