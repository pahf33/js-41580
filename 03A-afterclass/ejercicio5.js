let today = new Date(); // me entrega la fecha de hoy
// console.log(today);
let day = today.getDay(); // me entrega un número indicando el día, siendo el lunes el #1
// console.log(day);
switch (day) {
  case 1:
    console.log("Es lunes");
    break;
  case 2:
    console.log("Es martes");
    break;
  case 3:
    console.log("Es miércoles");
    break;
  case 4:
    console.log("Es jueves");
    break;
  case 5:
    console.log("Es viernes");
    break;
  case 6:
    console.log("Es sábado");
    break;
  case 7:
    console.log("Es domingo");
    break;
  default:
    break;
}
