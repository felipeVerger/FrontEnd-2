//1- Agregar a la tarjeta, el atributo "class" con el valor "card"
let elemento = document.querySelector("#tarjeta");
elemento.setAttribute("class", "card");


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"
let elementoImagen = document.querySelector("img");
elementoImagen.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png")


//3- Quitarle al titulo la clase que le está dando un formato feo
let removeTitulo = document.querySelector("h1");
removeTitulo.removeAttribute("class");


//4- Chequear si el link a youtube posee o no el atributo href
let tieneHref = document.querySelector("a");
tieneHref.hasAttribute("href");


//5- Obtener el href del link a wikipedia y mostrarlo por consola
let linkWikipedia = document.querySelector("#link_wikipedia");
let link = linkWikipedia.getAttribute("href");
console.log(link);