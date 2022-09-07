function existToken() {
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
}
if (!existToken()) {
  window.location.href = "./index.html";
}
