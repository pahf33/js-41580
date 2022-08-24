// Uso de for of y for in

// función constructora Persona
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
}
const personas = [];
for (let index = 1; index <= 5; index++) {
  // creando 5 objetos distintos
  const persona = new Persona("Homero", 10 * index, "Av. Siempreviva 742");
  // modificando el valor de una propiedad de cada objeto
  personas.push(persona);
}
// con for of puedo iterar un arreglo de objetos
// puedo acceder a cada uno de los elementos de 'personas' con la variable 'persona'
// esta última debe ser const
for (const persona of personas) {
  console.log(persona);
  // con for in puedo acceder a las propiedades de un objeto en particular
  for (const key in persona) {
    console.log(key);
  }
}
