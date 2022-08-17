// Crear un programa que liste la suma de los dígitos de cada número del 1 al 100

function getSum(numero) {
  let suma = 0;
  for (let i = 10; i <= numero * 10; i *= 10) {
    let digito = numero % i;
    let resultado = parseInt(digito / (i / 10));
    suma = suma + resultado;
  }
  return suma;
}
for (let i = 1; i <= 100; i++) {
  let suma = getSum(i);
  console.log(i, "->", suma);
}
