const opciones = ['piedra', 'papel', 'tijera'];

const juego = {
    opciones: opciones,

    eleccionComputadora: function() {
        const indiceAleatorio = Math.floor(Math.random() * this.opciones.length);
        return this.opciones[indiceAleatorio];
    },

    determinarGanador: function(jugador, computadora) {
        if (jugador === computadora) {
            console.log("Empate");
            return "Empate";
        } else if (this.ganaJugador(jugador, computadora)) {
            console.log("¡Ganaste!");
            return "¡Ganaste!";
        } else {
            console.log("¡Perdiste!");
            return "¡Perdiste!";
        }
    },

    ganaJugador: function(jugador, computadora) {
        return (
            (jugador === 'piedra' && computadora === 'tijera') ||
            (jugador === 'papel' && computadora === 'piedra') ||
            (jugador === 'tijera' && computadora === 'papel')
        );
    },

    eleccionJugador: function() {
        const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

        if (!this.opciones.includes(eleccionUsuario)) {
            alert("Elección inválida. Por favor, elige piedra, papel o tijera.");
            return;
        }

        return eleccionUsuario;
    }
};

const eleccionUsuario = juego.eleccionJugador();
const eleccionComputadora = juego.eleccionComputadora();
juego.determinarGanador(eleccionUsuario, eleccionComputadora);

