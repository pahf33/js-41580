// fetch("https://jsonplaceholder.typicode.com/posts/1").then((posts) =>
//   posts.json().then((data) => {
//     putData(data);
//   })
// );
// function putData(data) {
//   let post = data;
//   console.log(post);
//   document.querySelector("#posts").innerHTML = data.title;
// }
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Coderhouse",
    body: "Post de prueba",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
