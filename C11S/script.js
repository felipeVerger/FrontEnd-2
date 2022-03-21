let formulario = document.querySelector("form");
let inputNombre = document.querySelector("#nombre");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let errores = [];

    let inputNombreValue = inputNombre.value.trim();

    if(inputNombreValue === ""){
        errores.push({
            input: "nombre",
            error: "Este campo es obligatorio"
        })
    }

    if (errores.length !== 0){
        errores.forEach(function(error){
            switch(error.input){
                case "nombre":
                
            }
        })
    } else {
        formulario.submit();
    }
})