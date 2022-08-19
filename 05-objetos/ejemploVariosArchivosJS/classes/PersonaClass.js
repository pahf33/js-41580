// utilizo el export default para que exporte por defecto lo que yo indique
export default class Persona {
  constructor(nombre, edad, calle, auto) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.auto = auto;
  }
  hablar() {
    console.log("HOLA SOY " + this.nombre);
    console.log("Este es mi auto ", this.auto);
  }
}
