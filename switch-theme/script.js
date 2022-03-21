let body = document.querySelector("body");
let titulo = document.querySelector("h1");
let items = document.getElementsByClassName("items");

function switchTema(){
  body.classList.toggle('dark');
}

// let imagenes = document.querySelectorAll("img");
let imagenesSrc = [{
  tigre: "./IMG/tiger.jpg", 
  leon: "./IMG/leon.jpg", 
  leopardo: "./IMG/leopardo.jpg", 
  pantera: "./IMG/pantera-negra.jpg", 
  jaguar: "./IMG/jaguar.jpg", 
  chita: "./IMG/chita.jpg"}];

// function agregarSrcDeImagen(){
//   imagenes.forEach(function(element){
//     for (let i = 0; i < imagenesSrc.length; i++) {
//       let recurso = imagenesSrc[i];
//       console.log(recurso);
//       element.setAttribute("src", recurso);
//     }
//   })
// }

// agregarSrcDeImagen()



let recorrerRecursos = function (){
  for (let i = 0; i < imagenesSrc.length; i++) {
    const recurso = imagenesSrc[i];
    return recurso;
  }
};
// console.log(recorrerRecursos());

let divItems = document.querySelectorAll(".item");

for (let i = 0; i < 6; i++) {
  let cards = `<img src="${recorrerRecursos()}"`
  console.log(cards);
  divItems.innerHTML += cards;
}


