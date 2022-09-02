let contador = 0;
let h2Contador = document.querySelector("#contador");
h2Contador.innerHTML = contador;
let inputReset = document.querySelector("#reset");
console.dir(inputReset);
inputReset.addEventListener("input", resetToNumber);

function incrementar(event) {
  console.log(event);
  contador += 1;
  actualizarContador();
}
function decrementar() {
  contador -= 1;
  actualizarContador();
}
function actualizarContador() {
  h2Contador.innerHTML = contador;
}
function reset() {
  contador = 0;
  actualizarContador();
}

function resetToNumber(event) {
  console.log(event.target.value);
  const valueToReset = inputReset.value;
  contador = parseInt(valueToReset);
  actualizarContador();
}

function addText(texto) {
  let textoDiv = document.querySelector("#texto");
  let h2Created = document.createElement("h2");
  textoDiv.append(h2Created);
  h2Created.innerHTML = texto;
}

function removeText() {
  let h2Created = document.querySelector("#texto h2");
  h2Created.remove();
}
