// for
const ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
  const resultado = ingresarNumero * i;
  console.log(ingresarNumero + " X " + i + " = " + resultado);
}

console.log("estoy por fuera");

// for sin contador
let entrada = prompt("Ingresar un dato");
for (; entrada != "ESC"; ) {
  alert("El usuario ingresó " + entrada);
  //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
  entrada = prompt("Ingresar otro dato");
}
console.log("estoy por fuera");
