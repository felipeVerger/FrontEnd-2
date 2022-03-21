// CLASE SINCRONICA
// let imagenes = document.querySelectorAll("img");
// let urlDeImagenes = [];

// imagenes.forEach(function(element, indice){
//   urlDeImagenes.push(element.setAttribute("src", prompt("Ingresar url de imagen: " + (indice + 0))))
// });

// console.log(urlDeImagenes);


// ETAPA 2
// let imagenes = document.querySelectorAll("a");

// imagenes.forEach(function(element, indice){
//   let urlDeImagenes = prompt("Ingrese una imagen: " + (indice + 1));
//   let imgElement =  document.createElement("img");

//   element.setAttribute("href", urlDeImagenes);
//   element.setAttribute("target", "_blank");

//   element.appendChild(imgElement);

//   imgElement.setAttribute("src", urlDeImagenes);
// })


// ETAPA 3
let contenedor = document.querySelector(".contenedor");

for (let i = 0; i < 3; i++) {
  let url = prompt("Ingrese la imagen: " + (i + 1));

  let cards = `<div class="tarjeta">
                  <a class="rutas-img" href="${url}" target="_blank">
                      <img src="${url}" class="imagen" alt="imagen-1" id="imagen-1>
                  </a>
              </div>`;

  contenedor.innerHTML += cards;
}
