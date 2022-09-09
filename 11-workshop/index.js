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
const tableFood = document.querySelector("#foodTable tbody");
const foodForm = document.querySelector("#addFood");
updateFoodTable();

function saveFood() {
  console.log(foodForm.idPlate);
  if (foodForm.idPlate && foodForm.idPlate != 0) {
    for (let index = 0; index < food.length; index++) {
      if (food[index].id == foodForm.idPlate) {
        food[index].name = foodForm.foodName.value;
        food[index].link = foodForm.foodLink.value;
        food[index].price = foodForm.foodPrice.value;
        break;
      }
    }
    foodForm["idPlate"] = 0;
    updateFoodTable();
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
  const btn = event.target;
  const id = btn.id.split("_")[1];
  food = food.filter((plate) => plate.id != id);
  updateFoodTable();
}

function editFood(event) {
  const btn = event.target;
  const id = btn.id.split("_")[1];
  const plato = food.filter((plate) => plate.id == id)[0];
  foodForm.foodName.value = plato.name;
  foodForm.foodLink.value = plato.link;
  foodForm.foodPrice.value = plato.price;
  foodForm["idPlate"] = plato.id;
  console.dir(foodForm);
}
