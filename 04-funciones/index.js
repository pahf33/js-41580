function solicitarNombre(indice, parametro2, parametro3) {
  if (indice % 2 == 0) {
    console.log("ejecuto funcion en la iteracion ", indice);
    let nombreIngresado = prompt("Ingresar nombre");
    if (nombreIngresado.length < 3) {
      alert("Error");
    } else {
      alert("El nombre ingresado es " + nombreIngresado);
    }
  }
}

for (let index = 0; index < 5; index++) {
  solicitarNombre(index);
}
