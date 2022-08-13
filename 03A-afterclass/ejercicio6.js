let numero = parseInt(prompt("Ingrese el número"));
for (let x = 0; x < numero; x++) {
  let cadena = "";
  for (let y = 0; y < numero; y++) {
    if (y == x || x == numero - y - 1) {
      cadena += "*";
    } else {
      cadena += " ";
    }
  }
  console.log(cadena);
}
