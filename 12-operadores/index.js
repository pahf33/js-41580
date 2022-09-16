// TERNARIO
const numero = Math.random();
console.log(numero);
if (numero < 0.5) {
  console.log("cara");
} else {
  console.log("cruz");
}
numero < 0.5 ? console.log("cara") : console.log("cruz");

let type = "form2";
const formulario = {
  campo1: "str",
  campo2: "str",
  campo3: "str",
  campo4: "str",
  campo5: "str",
  campo6: type == "form1" ? "esto" : "esto otro",
  campo7: "str",
  campo8: "str",
  campo9: type == "form1" ? "str" : 123,
  campo10: "str",
};
console.log(formulario);

const usuario1 = {
  nombre: "John Doe",
  edad: 24,
};

const registroIngreso = usuario1.edad >= 18 && new Date();
// const fecha = new Date();
// fecha.setMonth(1);
// fecha.toLocaleString();
// console.log(fecha.toLocaleString());
console.log(registroIngreso);

let usuario2 = null;
//console.log(usuario2.nombre || "El usuario no existe");
const nombre = usuario2?.nombre?.firstName?.value;
if (nombre) {
  console.log(nombre);
} else {
  console.log("esto es nulo");
}
//console.log(usuario?.nombre?.firstName?.value || "El nombre no existe");
