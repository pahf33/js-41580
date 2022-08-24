// arreglo vacío
let numeros = [];
// console.log(numeros.length);

//inicializar
let numeros2 = [1, 2, 3, numeros];
//console.log("numeros ", numeros2.length);
//console.log(numeros2);

let animal = {
  nombre: "Pedro",
  tipo: "Perro",
};

const animales = ["perro", "gato", animal];
//console.log("animales ", animales.length);
//console.log(animales);

// acceder al arreglo
console.log(animales[0]);

// ultima posicion
let ultimaPosicion = animales.length - 1;
console.log(animales[ultimaPosicion]);
