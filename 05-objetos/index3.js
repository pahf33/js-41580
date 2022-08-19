// podemos crear varias clases de acuerdo al contexto del problema
class Persona {
  constructor(nombre, edad, calle, auto) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.auto = auto;
  }
  // método de la clase
  hablar() {
    console.log("HOLA SOY " + this.nombre);
    console.log("Este es mi auto ", this.auto);
  }
}

class Auto {
  constructor(model, marca, color) {
    this.model = model;
    this.marca = marca;
    this.color = color;
  }
}
const color = prompt("ingrese color de carro");

const auto = new Auto("1990", "Audi", color);
// puedo pasar como argumento un objeto a otro
const persona1 = new Persona("Homero", 34, "calle", auto);
persona1.hablar();
