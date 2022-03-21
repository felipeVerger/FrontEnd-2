// console.log( alert('Esto es una alerta') );

// console.log(confirm('Quieres seguir navegando?')
// );

// console.log(prompt('Ingrese su nombre'));

// let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

// if(tratoPersonalizado){
// let nombre = prompt("Por favor, introduzca su nombre");
// alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas gracias por visitarnos, estamos a su disposición! 😀");
// } else {
// alert("Gracias por conectarse.")
// }

// let a = parseInt("22");
// let b = parseInt(prompt("Ingrese edad"));
// let c = parseInt("22"+"150");
// let d = parseInt(22+150)
// let e = parseInt(22+parseInt("150"));
// let f = parseInt(22.55);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

const personaje = {
    nombre: 'Luke',
    apellido: 'Skywalker',
    edad: 15,
}

for(let caracteristica in personaje) {
    console.log(personaje[caracteristica]);
}

const series = ['broklynn nine nine', 'Viking', 'Game of thrones']

for(let nombreSerie of series) {
    console.log(nombreSerie);
}
