const name = prompt("Ingrese nombre");
const documento = prompt("Ingrese su número de documento");
const ingresos = parseInt(prompt("Ingrese la suma de sus ingresos"));
const gastos = parseInt(prompt("Ingrese la suma de sus gastos"));
const tieneTarjeta = prompt(
  "Tiene tarjeta de crédito? Ingrese 'yes' para indicar que sí o cualquier palabra para lo contrario"
);
let cupo;
if (tieneTarjeta == "yes") {
  cupo = parseInt(prompt("Ingrese el cupo de su tarjeta"));
}
const tipoEmpleado = prompt(
  " Ingrese el tipo de empleado: empleado o independiente"
);
let tipoContrato;
let actividad;
if (tipoEmpleado == "empleado") {
  tipoContrato = prompt("Tipo contrato: contratista o indefinido");
} else if (tipoEmpleado == "independiente") {
  actividad = parseInt(prompt("Ingrese la actividad: código entre 1 y 5"));
}

if (tieneTarjeta == "yes" && cupo >= ingresos * 2.5) {
  alert("Se rechaza");
} else if (ingresos - gastos < ingresos / 2) {
  alert("Se rechaza");
} else if (
  tipoEmpleado == "independiente" &&
  actividad <= 3 &&
  ingresos < 1000
) {
  alert("Se rechaza");
} else if (
  tipoEmpleado == "empleado" &&
  tipoContrato == "contratista" &&
  ingresos < 500
) {
  alert("Se rechaza");
} else if (documento % 2 == 1) {
  alert("Se rechaza");
} else {
  alert("Aprueba");
}
// ejemplo de unir todas las condiciones dentro de una sola condición
if (
  (tieneTarjeta == "yes" && cupo >= ingresos * 2.5) ||
  ingresos - gastos < ingresos / 2 ||
  (tipoEmpleado == "independiente" && actividad <= 3 && ingresos < 1000) ||
  (tipoEmpleado == "empleado" &&
    tipoContrato == "contratista" &&
    ingresos < 500) ||
  documento % 2 == 1
) {
  alert("Se rechaza");
} else {
  alert("Aprueba");
}
