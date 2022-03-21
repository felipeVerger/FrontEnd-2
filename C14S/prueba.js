// let nombre = prompt("Ingresa tu nombre");
// localStorage.setItem("nombreUsuario", nombre);



if(localStorage.getItem("nombreUsuario") == null){
    let nombre = prompt("Ingresa tu nombre:");
    localStorage.setItem("nombreUsuario", nombre);
} 

document.querySelector("h1").innerText = "Hola " + localStorage.getItem("nombreUsuario");