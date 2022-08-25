class Usuario {
  constructor(nombre, apellido, edad, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.id = id;
  }
}

const usuarios = [];
let option = 0;
do {
  option = parseInt(
    prompt(
      "Ingrese 1 para agregar, 4 para ver un usuario, 5 para ver todos, 6 para salir"
    )
  );
  switch (option) {
    case 1:
      agregarUsuario(usuarios);
      break;
    case 4:
      verUsuario(usuarios);
      break;
    case 5:
      verTodosLosUsuarios(usuarios);
      break;
    default:
      verTodosLosUsuarios(usuarios);
      break;
  }
} while (option != 6);

// agregar
function agregarUsuario(usuarios) {
  let nombre = prompt("Ingrese nombre");
  let apellido = prompt("Ingrese apellido");
  let edad = parseInt(prompt("Ingrese edad"));
  let newUser = new Usuario(nombre, apellido, edad, usuarios.length + 1);
  usuarios.push(newUser);
  console.log("Se agregó el usuario ", newUser);
}

// ver todos
function verTodosLosUsuarios(usuarios) {
  for (const usuario of usuarios) {
    console.log(usuario);
  }
}

// ver un usuario
function verUsuario(usuarios) {
  let texto = "";
  for (let index = 0; index < usuarios.length; index++) {
    texto = texto.concat(
      `Ingrese ${index + 1} para el usuario ${usuarios[index].nombre} \n`
    );
  }
  console.log(texto);
  const option = parseInt(prompt(texto));
  console.log(usuarios[option - 1]);
}
