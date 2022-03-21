// PROBANDO TRY / CATCH
// function saludar(){
//     let prueba = false;
//     if(prueba){
//         return "Hola equipo";
//     } else {
//         throw new Error("Prueba es falso");
//     }
// }

// try {
//     console.log(saludar());
// } catch(error) {
//     console.error(error);
// }

let provincias = fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(function(response) {
    response.json();
})
    .then(function(respuesta) {
        let inputSelect = document.querySelector("select#provincia");
        let provincias = respuesta.provincias;
        provincias.forEach(function(provincia) {
            inputSelect.innerHTML += `<option value="${provincia.id}">${provincia.nombre}</option>`;
    });
})
//  desembolvemos la promesa de la api con el primer then,
//  el valor de retorno del primer then es una promesa por lo que volvemos a aplicar un then 
//  para desenvolver esa segunda promesa y acceder a su contenido
//  provincias que seria la respuesta