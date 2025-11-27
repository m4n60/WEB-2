const tablero = document.getElementById('tablero');
const mensaje = document.getElementById('mensaje');
let jugador = 'X';
let celdas = Array(9).fill('');

// Crear tablero
for (let i = 0; i < 9; i++) {
  const celda = document.createElement('div');
  celda.classList.add('celda');
  celda.addEventListener('click', () => jugar(i));
  tablero.appendChild(celda);
}

function jugar(i) {
  if (celdas[i] === '' && !verificarGanador()) {
    celdas[i] = jugador;
    actualizarTablero();
    if (verificarGanador()) {
      mensaje.textContent = `¡Jugador ${jugador} gana! 🎉`;
    } else if (!celdas.includes('')) {
      mensaje.textContent = 'Es un empate';
    } else {
      jugador = jugador === 'X' ? 'O' : 'X';
      mensaje.textContent = `Turno del jugador ${jugador}`;
    }
  }
}

function actualizarTablero() {
  const elementos = document.querySelectorAll('.celda');
  elementos.forEach((celda, i) => {
    celda.textContent = celdas[i];
  });
}

function verificarGanador() {
  const combinaciones = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return combinaciones.some(([a,b,c]) =>
    celdas[a] && celdas[a] === celdas[b] && celdas[a] === celdas[c]
  );
}

function reiniciar() {
  celdas = Array(9).fill('');
  jugador = 'X';
  mensaje.textContent = 'Turno del jugador X';
  actualizarTablero();
}

// Inicializa mensaje
mensaje.textContent = 'Turno del jugador X';
