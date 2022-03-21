let unArray = ["Harry", "Potter", 25];
let unObjeto = {
    nombre: "Harry",
    apellido: "Potter",
    edad: 25,
}

for (let i = 0; i < unArray.length; i++) {
    console.log(unArray[i]);
}


console.log("------------------");

unArray.forEach(function(element, indice, array) {
    console.log(element);
    console.log(indice);
})

console.log("-------------------");

for(let propiedad in unObjeto) {
    console.log(unObjeto[propiedad])
}


console.log("------------------");

for(const element of unArray) {
    console.log(element);
}