/* 
    En el colegio, me pidieron que escribiera un programa
    que mostrara cuál es el promedio de edad de la familia y 
    también, que mostrara la edad que va a tener cada uno después de que pasen
    7 años.
    Mi familia tiene 5 personas (madre, padre, hermano, hermana, yo) 
    y no sé exactamente la edad de ellos.
    Voy a preguntarles...
*/
const madre = parseInt(prompt("Ingrese la edad de la madre"));
const padre = parseInt(prompt("Ingrese la edad del padre"));
const hermana = parseInt(prompt("Ingrese la edad de la hermana"));
const hermano = parseInt(prompt("Ingrese la edad del hermano"));
const yo = parseInt(prompt("Ingrese mi edad"));

const promedio = (madre + padre + hermana + hermano + yo) / 5;
console.log("El promedio de edad es ", promedio);
console.log("edad", madre + 7);
console.log("edad", padre + 7);
console.log("edad", hermana + 7);
console.log("edad", hermano + 7);
console.log("edad", yo + 7);
