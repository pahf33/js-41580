let animales = ["gato", "perro", "loro", "pez"];

// forEach
animales.forEach((animal) => {
  animal = animal.concat("23");
  //console.log(animal);
});
//console.log(animales);

// filter
let filtro = animales.filter((animal) => animal.length == 4);
//console.log(filtro);

// sort
let orden = animales.sort((animal1, animal2) => {
  if (animal1.length > animal2.length) return 1;
  else if (animal1.length == animal2.length) return 0;
  else return -1;
});
// console.log(orden);
// console.log(animales);

// map
const usuarios = [
  {
    id: 1,
    nombre: "Pedro",
    edad: 45,
  },
  {
    id: 2,
    nombre: "Manuel",
    edad: 5,
  },
  {
    id: 3,
    nombre: "Laura",
    edad: 4,
  },
];
const edades = usuarios.map((usuario) => {
  return {
    edad: usuario.edad,
    isActive: true,
  };
});
console.log(edades);
//console.log(usuarios);
