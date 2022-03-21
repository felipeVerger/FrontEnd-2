/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado
- implmentar el evento "submit", utilizarlo para guardar el comentario en un array
- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)
- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

let form = document.querySelector("#search");
let inputBusqueda = document.querySelector("#comentario");
let comentariosRealizados = document.querySelector(".comentarios");

const arrayComentarios = localStorage.getItem("comentarios") ? JSON.parse
(localStorage.getItem("comentarios")) : [];

arrayComentarios.forEach(element => {
    comentariosRealizados.innerHTML += `<p>${element}</p>`;
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(inputBusqueda.value.trim() === ""){
        alert("Ingrese un comentario")
    } else {
        comentariosRealizados.innerHTML += `<p>${inputBusqueda.value}</p>`;
        arrayComentarios.push(input.value);
        localStorage.setItem("comentarios", JSON.stringify(arrayComentarios));
        inputBusqueda.value = "";
    }
})

