const opciones = ['piedra', 'papel', 'tijera'];

function eleccionComputadora() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

function determinarGanador(jugador, computadora) {
    if (jugador === computadora) {
        console.log("Empate");
        return "Empate";
    } else if (
        (jugador === 'piedra' && computadora === 'tijera') ||
        (jugador === 'papel' && computadora === 'piedra') ||
        (jugador === 'tijera' && computadora === 'papel')
    ) {
        console.log("¡Ganaste!");
        return "¡Ganaste!";
    } else {
        console.log("¡Perdiste!");
        return "¡Perdiste!";
    }
}

function eleccionJugador() {
    const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
    
    if (!opciones.includes(eleccionUsuario)) {
        alert("Eleccion inválida. Por favor, elige piedra, papel o tijera.");
        return;
    }

    const computadora = eleccionComputadora();
    const resultado = determinarGanador(eleccionUsuario, computadora);
    mostrarResultado(resultado, eleccionUsuario, computadora);
}

function mostrarResultado(resultado, jugador, computadora) {
    alert(`Elegiste ${jugador}. La computadora eligió ${computadora}. Resultado: ${resultado}`);
}


eleccionJugador();