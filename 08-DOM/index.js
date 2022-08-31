console.dir(document);
console.dir(document.images);

console.log("selector por id");
console.dir(document.getElementById("tour"));
console.dir(document.querySelector("#tour"));
console.log("selector por clase");
console.dir(document.getElementsByClassName("w3-third"));
console.dir(document.querySelectorAll(".w3-third"));
console.log("selector por tag");
console.dir(document.getElementsByTagName("p"));
console.dir(document.querySelectorAll("p"));

// solamente modificamos uno
let contact = document.querySelector("#contact h2");
console.log(contact.innerHTML);
contact.innerHTML = "CUALQUIER COSA";

// seleccionamos los encabezados de contact y los modificamos
let contacts = document.querySelectorAll("#contact h2");

for (const contact of contacts) {
  contact.innerHTML = "CUALQUIER COSA";
}

// se crean 3 integrantes más de la banda.
// se colocan template literals para modificar el contenido de cada elemento
for (let i = 0; i < 3; i++) {
  const newPerson = document.createElement("div");
  document.querySelector("#bandPeople").append(newPerson);
  newPerson.innerHTML = `<p>Name: ${i}</p>
    <img
      src=""
      class="w3-round w3-margin-bottom"
      alt="Random Name ${i}"
      style="width: 60%"
    />`;
  newPerson.classList.add("w3-third");
}
