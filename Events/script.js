
// EVENTOS DE MOUSE

// let titulo = document.querySelector("h1");

// titulo.addEventListener("click", function(){
//     console.log("Hola a todos");
// })

// titulo.addEventListener("mouseover", function(){
//     console.log("Estas sobre el elemento");
// })

function qs(elemento) {
    return document.querySelector(elemento)
}

let resultado = qs("#resultado");
let btnBajar = qs("#bajar");
let btnSubir = qs("#subir");
let valor = 0;

btnBajar.addEventListener("click", function(){
    valor--;
    resultado.innerText = valor
})

btnSubir.addEventListener("click", function(){
    valor++
    resultado.innerText = valor
})


// EVENTOS DE TECLADO 

let inputText = qs("#prueba");
let display = qs("#display");

inputText.addEventListener("keyup", function(){
    console.log("se esta tecleandoo")
})


// EVENTOS DE TIMER

let conteo = qs("#conteo");

conteo.addEventListener("click", function(){
    setTimeout(function(){
        alert("Pasaron 5 segundos")
    }, 5000)
})

let cronometro = qs("#cronometro");
let segundos = 8;

cronometro.addEventListener("click", function(){
    setInterval(function(){
        console.log(segundos);
        segundos++;
    }, 1000)
})

