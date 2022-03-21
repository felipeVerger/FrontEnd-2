function encuentra(miNumero){
    let numeroRandom = parseInt(Math.random() * 2);
    let puntaje = 0;

    while (puntaje < 5) {
        if (miNumero ===  numeroRandom) {
            console.log("Acertaste tu numero era: " + miNumero + " y el de la maquina: " + numeroRandom);
            return ++puntaje;
        } else {
            console.log("Perdiste tu numero era " + miNumero + ", y el random es " + numeroRandom);
            return  --puntaje;
        }
    }
    return puntaje;
}

console.log(encuentra(0));






// // Tragamonedas
// const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const eleccionUsuario = prompt("Elegi un numero del 1 al 10: ");
// const numeroRandom = parseInt(Math.random()*10);
// const eleccionMaquina = valores[numeroRandom];
// const puntaje = 0;

// alert("Tu eleccion fue:" + eleccionUsuario);
// alert("La maquina saco este numero: " + eleccionMaquina);

// while (puntaje < 5) {

//     if (eleccionUsuario == eleccionMaquina) {
//         console.log("Ganaste");
//         puntaje++;
//     } else {
//         console.log("Perdiste");
//         puntaje--;
//     }

//     console.log("Tu puntaje es de: " + puntaje);
// }




// LOTERIA

// const premio = 2500;
// const puntaje = 0;
// const casillas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const eleccionUsuario = prompt("Elegi un numero del 1 al 10: ");

// function calcular(aciertos) {
//     for (let i = 0; i < casillas.length; i++) {
//         if (eleccionUsuario === casillas[i]) {
//             console.log("Ganaste sumas 1 punto");
//             puntaje++;
//         }
//         else {
//             console.log("Perdiste");
//         }
//     }
// }


// let numero = 20;
// while(numero>0){
//     resto = numero%10;
//     numero = parseInt(numero/10);
//     console.log(resto);
// }

// function aleatorio(minimo,maximo){
//     return Math.round(Math.random() * (maximo - minimo) + minimo);
// }

// console.log(aleatorio(5, 6));