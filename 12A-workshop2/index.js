// let formulario = document.querySelector("#login");

// function login(event) {
//   event.preventDefault();
//   let valueUsername = formulario.username.value;
//   let valuePassword = formulario.password.value;

//   const objetoUsuario = {
//     username: valueUsername,
//     password: valuePassword,
//   };

//   const token = generateToken(objetoUsuario.username, objetoUsuario.password);
//   localStorage.setItem("token", token);
//   const isAuth = existToken();
//   if (isAuth) {
//     const divPrivateContent = document.querySelector("#privateContent");
//     divPrivateContent.className = "showContent";
//     formulario.className = "hideContent";
//     showUsername();
//   }
// }

// function generateToken(username, password) {
//   const usuario = {
//     username,
//     password,
//   };
//   return JSON.stringify(usuario);
// }

// function existToken() {
//   if (localStorage.getItem("token") !== null) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function showUsername() {
//   const strong = document.querySelector("#usernameLogin");
//   const token = JSON.parse(localStorage.getItem("token"));
//   strong.innerHTML = token.username;
// }

class Food {
  constructor(id, name, link, price) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.price = price;
  }
}

let food = [];
let counter = 1;
let idEditedPlate = 0;
const tableFood = document.querySelector("#foodTable tbody");
const foodForm = document.querySelector("#addFood");
const menuDiv = document.querySelector("#menuContent");
updateFoodTable();

function saveFood() {
  if (idEditedPlate != 0) {
    for (let index = 0; index < food.length; index++) {
      if (food[index].id == idEditedPlate) {
        food[index].name = foodForm.foodName.value;
        food[index].link = foodForm.foodLink.value;
        food[index].price = foodForm.foodPrice.value;
        break;
      }
    }
    updateFoodTable();
    updateCard(idEditedPlate);
    idEditedPlate = 0;
  } else {
    //crear
    const newFood = new Food(
      counter,
      foodForm.foodName.value,
      foodForm.foodLink.value,
      foodForm.foodPrice.value
    );
    food.push(newFood);
    counter++;
    updateFoodTable();
    addPlateToMenu(newFood);
    Toastify({
      text: `Se agregó el plato ${foodForm.foodName.value}`,
      duration: 3000,
    }).showToast();
  }
}

function updateFoodTable() {
  tableFood.innerHTML = "";
  console.log(food);
  food.forEach((plate) => {
    const plateHTML = document.createElement("tr");
    plateHTML.innerHTML = `<th scope="row">${plate.id}</th>
        <td>${plate.name}</td>
        <td>${plate.link}</td>
        <td>${plate.price}</td>
        <td><button
                id="editBtn_${plate.id}"
                type="button"
                class="btn btn-primary"
                onclick="editFood(event)"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                Editar
                </button>
            <button
                id="deleteBtn_${plate.id}"
                type="button"
                class="btn btn-danger"
                onclick="deleteFood(event)">
                Borrar
                </button>
            </td>
        `;
    tableFood.appendChild(plateHTML);
  });
}

function deleteFood(event) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const btn = event.target;
      const id = btn.id.split("_")[1];
      food = food.filter((plate) => plate.id != id);
      updateFoodTable();
      removeCard(id);
    }
  });
}

function editFood(event) {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  const plato = food.filter((plate) => plate.id == id)[0];
  foodForm.foodName.value = plato.name;
  foodForm.foodLink.value = plato.link;
  foodForm.foodPrice.value = plato.price;
  idEditedPlate = plato.id;
  console.dir(foodForm);
}

function addPlateToMenu(plate) {
  const { id, link, name, price } = plate;
  const generatedHTML = generateHTMLToCreateCard(id, link, name, price);
  menuDiv.innerHTML += generatedHTML;
}

function generateHTMLToCreateCard(id, link, name, price) {
  const cardHTML = `
    <div class="card ownCard" id="card_${id}" style="width: 30%">
      <img
        src="${link}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">$<span id='platePrice'>${price}</span></a>
      </div>
    </div>`;
  return cardHTML;
}

function updateCard(id) {
  const plato = food.filter((plate) => plate.id == id)[0];
  const h5Nombre = document.querySelector(`#card_${id} .card-title`);
  h5Nombre.innerHTML = plato.name;
  const spanPrice = document.querySelector(`#card_${id} #platePrice`);
  spanPrice.innerHTML = plato.price;
  const img = document.querySelector(`#card_${id} img`);
  img.src = plato.link;
}

function removeCard(id) {
  const h5Nombre = document.querySelector(`#card_${id}`);
  h5Nombre.remove();
}
