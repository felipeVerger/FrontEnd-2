window.addEventListener("load", function () {
  let titulo = document.querySelector("h1");
  let confirmacion = confirm("Queres modificar el titulo?");
  if (confirmacion) {
    titulo.style.color = "red";
    titulo.style.fontSize = "30px";
  }
});
