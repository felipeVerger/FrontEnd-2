let valores = ['piedra', 'papel', 'tijera'];

let eleccionUsuario = prompt("Elegi entre 'piedra', 'papel' 0 'tijera'...");
let eleccionMaquina = parseInt(Math.random() * 3);
let valorMaquina = valores[eleccionMaquina];

// Casos de empate
if (eleccionUsuario === valorMaquina) {
    console.log('Empataste');
}

// Otros
if (eleccionUsuario === 'piedra') {
    if (valorMaquina === 'papel') {
        console.log('Gana la maquina');
    } else {
        console.log('gana el usuario');
    }
}

if (eleccionUsuario === 'papel') {
    if (valorMaquina === 'tijera') {
        console.log('Gana la maquina');
    } else {
        console.log('gana el usuario');
    }
}

if (eleccionUsuario === 'tijera') {
    if (valorMaquina === 'piedra') {
        console.log('Gana la maquina');
    } else {
        console.log('gana el usuario');
    }
}

