// while con contador
let repetir = true;
let counter = 0;
while (counter < 10) {
  console.log("Al infinito y...¡Más allá! ", counter);
  counter++;
}

// while
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while (entrada != "ESC") {
  alert("El usuario ingresó " + entrada);
  //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
  entrada = prompt("Ingresar otro dato");
}
