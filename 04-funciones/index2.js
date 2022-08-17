let resultado = 0;

function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
  return resultado;
}

let primero = parseInt(prompt("Ingresar 1er"));
let segundo = parseInt(prompt("Ingresar 2do"));
const resultadoSuma = sumar(primero, segundo);
console.log("El resultado es ", resultadoSuma);
