function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
  // podemos tener métodos, que son funciones propias de la función constructora
  this.getNombre = () => {
    return this.nombre;
  };
  this.setNombre = (nombre) => {
    this.nombre = nombre;
  };
  // getters & setters nos ayudan a obtener y cambiar el valor de alguna propiedad
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const nombrePersona = persona1.getNombre();
console.log(nombrePersona);
