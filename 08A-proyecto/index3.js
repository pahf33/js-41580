class Producto {
  constructor(id, precio, ganancia) {
    this.id = id;
    this.precio = precio;
    this.ganancia = ganancia;
  }
}

const precio = prompt("Ingrese precio");
// const ganancia = prompt("Ingrese ganancia");
const miProducto = new Producto(1, precio, 0.1);
console.log(miProducto);

function suma(a, b) {
  a = 10;
  return a + b;
}
function sumaConArray(a) {
  let suma = 0;
  for (const numero of a) {
    suma = suma + numero;
  }
  return suma;
}
const valorSuma = suma(1, 10);
miProducto.precio = valorSuma;
console.log(miProducto);

const valorSumaConArray = sumaConArray([1, 10, 5, 5, 5]);
console.log(valorSumaConArray);
