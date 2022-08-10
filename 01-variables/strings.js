// Hay varias maneras de definir strings

let texto1 = "hola"; // con comillas simples o dobles. Son strings de una sola línea.
let firstName = "Pedro";
// puedo concatenar strings con el operador +
console.log(texto1 + firstName); // Esto imprimirá: holaPedro
// para dejar espacio entre las palabras, se puede concatenar junto a " "
console.log(texto1 + " " + firstName);

// backticks
let texto2 = `Este es un texto más largo.
            Aquí puedo colocar textos de mayor longitud y
            me permite colocarlo en varias líneas
            
            Inclusive, yo puedo definir una variable e incluirla 
            en mi texto de la siguiente manera: 
            
            Mi texto 1 es ${texto1}`;
