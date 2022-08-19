// función constructora Persona
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}
for (let index = 1; index <= 5; index++) {
  // creando 5 objetos distintos
  const persona1 = new Persona("Homero", 10 * index, "Av. Siempreviva 742");
  // modificando el valor de una propiedad de cada objeto
  persona1.edad = persona1.edad + 5;
  console.log(persona1);
}
