// let primeraPromesa = new Promise((resolve, reject) => {
//     let numero = 50;

//     setTimeoutif(() => {
//         if(numero > 1){
//             resolve({
//                 mensaje: "El numero es mayor a 1",
//             });
//         } else {
//             reject({
//                 mensaje: "El numero es menor a 1",
//             });
//         }
//     }, 2500)
// })

// primeraPromesa.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// });

fetch("https://apis.datos.gob.ar/georef/api/provincias").then((contenido) => {
    console.log(contenido);
})