// DESESTRUCTURACIÓN
const usuario = {
  nombre: "Pedro",
  apellido: "Higuera",
  edad: 100,
  address: {
    calle: "calle 1",
    carrera: "1",
    numero: "5",
  },
};

let { nombre, edad, address } = usuario;
let { calle } = address;
nombre = "Lola";

const medallas = [usuario, "plata", "bronce", "lata"];
//const [usuario1, _, bronce] = medallas;
//console.log(usuario1);

// console.log(Math.max(1, 2, 3)); // si  -> Math.max(...numeros)
// console.log(Math.max(...[1, 2, 3])); // no

const numerosImpares = [1, 3, 5, 7, 9];
const numerosPares = [2, 4, 6, 8, 10];
const numeros = [...numerosImpares];
numeros.push(...numerosPares);
// console.log(numeros);

const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript",
};

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
  ...usuario1,
};

const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com",
};

console.log(usuario1);
console.log(usuario3);
