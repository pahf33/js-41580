// utilizo la palabra import para traer lo que ha sido exportado del archivo referenciado
import Persona from "./classes/PersonaClass.js";
// Si el export es default, puedo colocarle cualquier nombre a la referencia
// (en este caso, le puse Auto) e igual se me importa lo mismo.
import Auto from "./classes/AutoClass.js";

const auto = new Auto("1990", "Audi", "azul");
const persona1 = new Persona("Homero", 34, "calle", auto);
persona1.hablar();
