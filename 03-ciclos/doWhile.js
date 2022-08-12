let repetir = true;
do {
  console.log("¡Solo una vez!");
} while (repetir);

let numero = 0;
do {
  //Repetimos con do...while mientras el usuario ingresa un n°
  numero = prompt("Ingresar Número");
  console.log(numero);
  //Si el parseo no resulta un número se interrumpe el bucle.
} while (parseInt(numero));
