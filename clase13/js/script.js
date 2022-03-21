let formularioHogwarts = document.querySelector("form#hogwarts");

// INPUT NOMBRE
let inputNombre = document.querySelector("input#nombre");
let errorNombre = document.querySelector("small#errorNombre");

// INPUT PASSWORD
let inputPassword = document.querySelector("input#pass");
let errorPass = document.querySelector("small#errorPass");

// INPUT TELEFONO
let inputTelefono = document.querySelector("input#tel");
let errorTel = document.querySelector("small#errorTel");

// CHECKBOX
let inputHobbies = document.getElementsByName("hobbies");
let errorHobbie = document.querySelector("small#errorHobbies");

// RADIO BUTTONS
let inputPaises = document.getElementsByName("nacionalidad");
let errorPais = document.querySelector("small#errorNacionalidad");


formularioHogwarts.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // ARRAYS DE ERRORES
    let errores = [];

    // CAMPO NOMBRE
    let inputNombreValue = inputNombre.value.trim();

    if(inputNombreValue === "") {
        errores.push({
            input: "nombre",
            error: "Este campo es obligatorio",
        })
    } else if (inputNombreValue.length < 3){
        errores.push({
            input: "nombre",
            error: "Este campo debe tener al menos 3 caracteres",
        })
    } else if (inputNombreValue.length > 15) {
        errores.push({
            input: "nombre",
            error: "Este campo no puede contener mas de quince caracteres",
        })
    }

    // ERRORES EN EL CAMPO NOMBRE
    if(errores.length !== 0) {
        errores.forEach(function(error) {
            switch(error.input) {
                case "nombre":
                    errorNombre.innerText = error.error;
                    break;
                case "nombre":
                    errorNombre.innerText = error.error;
                    break;
                case "nombre":
                    errorNombre.innerText = error.error;
                    break;
            }
        })
    } 

    // CAMPO CONTRASEÑA y TELEFONO
    let inputPassValue = inputPassword.value.trim();
    let inputTelValue = inputTelefono.value.trim();

    if(inputPassValue === ""){
        errores.push({
            input: "password",
            error: "Este campo es obligatorio",
        })
    } 
    if(inputTelValue === ""){
        errores.push({
            input: "telefono",
            error: "Este campo es obligatorio",
        })
    }

    // ERRORES DEL CAMPO PASSWORD
    if(errores.length !== 0) {
        errores.forEach(function(error) {
            switch(error.input) {
                case "password":
                    errorPass.innerText = error.error;
                    break;
            }
        })
    }

    // ERRORES DEL CAMPO TELEFONO
    if(errores.length !== 0) {
        errores.forEach(function(error){
            switch(error.input) {
                case "telefono":
                    errorTel.innerText = error.error;
                    break;
            }
        })
    } 

    // CAMPO DE HOBBIES(CHECKBOX)

    let contador = 0;
    for (let i = 0; i < inputHobbies.length; i++) {
        if(inputHobbies[i].checked) {
            contador = contador + 1;
        } else if (contador > 4){
            errores.push({
                input: "checkbox",
                error: "No puedes ingresar mas de 4 hobbies",
            })
        }
        
    }
    
    if(errores.length !== 0){
        errores.forEach(function(error){
            switch(error.input){
                case "checkbox":
                    errorHobbie.innerText = error.error;
                    break;
            }
        })
    }

    // CAMPO DE PAIS DE NACIMIENTO(RADIO BUTTONS)
    let contador2 = 0;
    for (let i = 0; i < inputPaises.length; i++) {
        if(inputPaises[i].checked) {
            contador2 = contador2 + 1;
        } else if (contador2 === 0) {
            errores.push({
                input: "radioButon",
                error: "Es obligatorio ingresar el pais donde nacio",
            })
        }
    }

    if(errores.length !== 0){
        errores.forEach(function(error){
            switch(error.input){
                case "radioButon":
                    errorPais.innerText = error.error;
                    break;
            }
        })
    }

    if(errores.length === 0){
        formularioHogwarts.submit();
    }


})

function guardarDatos() {
    localStorage.nombre = inputNombre.value;
    localStorage.password = inputPassword.value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = `Nombre: ${localStorage.nombre} <br> Password:  ${localStorage.password}`
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}