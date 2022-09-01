class Jugador {
  constructor(id, dinero, nombre) {
    this.dinero = dinero;
    this.id = id;
    this.nombre = nombre;
  }

  actualizarDinero(apuesta) {
    this.dinero += apuesta;
  }
}

const cantidadJugadores = parseInt(prompt("Ingrese numero de jugadores"));
const apuestaMinima = parseInt(prompt("Ingrese apuesta minima"));

let pozo = 0;

const jugadores = [];

for (let i = 1; i <= cantidadJugadores; i++) {
  const dinero = parseInt(prompt("Ingrese dinero del jugador " + i));
  const nombre = prompt("Ingrese nombre del jugador " + i);
  const jugador = new Jugador(i, dinero - apuestaMinima, nombre);
  jugadores.push(jugador);
}
pozo += apuestaMinima * cantidadJugadores;
console.log("valor del pozo ", pozo);
let dineros = [];
do {
  //console.log("dentro del do while");
  dineros = jugadores.map((jugador) => {
    if (pozo <= 0) {
      return 0;
    }
    console.log("Turno del jugador " + jugador.nombre);
    const primerLanzamiento = lanzarDado();
    console.log("primerLanzamiento ", primerLanzamiento);
    switch (primerLanzamiento) {
      case 1:
        pozo += apuestaMinima;
        jugador.actualizarDinero(-apuestaMinima);
        console.log("Se agrego al pozo " + apuestaMinima);
        console.log("El nuevo valor del pozo es" + pozo);
        break;
      case 6:
        pozo -= apuestaMinima;
        jugador.actualizarDinero(apuestaMinima);
        console.log("Se quito del pozo " + apuestaMinima);
        console.log("El nuevo valor del pozo es" + pozo);
        break;
      default:
        const segundaApuesta = parseInt(prompt("Ingrese segunda apuesta"));
        const condicion = prompt(
          "Ingrese 1 si quiere indicar mayor o 2 si quiere indicar menor"
        );
        const segundoLanzamiento = lanzarDado();
        console.log("segundoLanzamiento ", segundoLanzamiento);
        if (condicion == 1 && segundoLanzamiento > primerLanzamiento) {
          pozo -= segundaApuesta;
          jugador.actualizarDinero(segundaApuesta);
          console.log("Se quito del pozo " + segundaApuesta);
          console.log("El nuevo valor del pozo es" + pozo);
        } else if (condicion == 1 && segundoLanzamiento <= primerLanzamiento) {
          pozo += segundaApuesta;
          jugador.actualizarDinero(-segundaApuesta);
          console.log("Se agrego al pozo " + segundaApuesta);
          console.log("El nuevo valor del pozo es" + pozo);
        } else if (condicion == 2 && segundoLanzamiento < primerLanzamiento) {
          pozo -= segundaApuesta;
          jugador.actualizarDinero(segundaApuesta);
          console.log("Se quito del pozo " + segundaApuesta);
          console.log("El nuevo valor del pozo es" + pozo);
        } else if (condicion == 2 && segundoLanzamiento >= primerLanzamiento) {
          pozo += segundaApuesta;
          jugador.actualizarDinero(-segundaApuesta);
          console.log("Se agrego al pozo " + segundaApuesta);
          console.log("El nuevo valor del pozo es" + pozo);
        }
        break;
    }
    return jugador.dinero;
  });
  //   console.log("pozo ", pozo > 0);
  //   console.log("corrobora ", corroboraDinero(dineros));
} while (pozo > 0 && corroboraDinero(dineros));
console.log("Acabo el juego");
console.log("El pozo es de " + pozo);
console.log(jugadores);

function lanzarDado() {
  return Math.floor(Math.random() * 6 + 1);
}

function corroboraDinero(dineros) {
  let flag = true;
  for (const dinero of dineros) {
    if (dinero <= 0) {
      flag = false;
      return flag;
    }
  }
  return flag;
}
