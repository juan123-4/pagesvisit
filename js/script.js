// Función para actualizar el contador de visitas
function actualizarContador() {
    let contador = localStorage.getItem('contadorOne');

    if (contador === null) {
        contador = 0;
    } else {
        contador = parseInt(contador, 10);
    }

    contador += 1;
    localStorage.setItem('contadorOne', contador);
    document.getElementById('contadorVisitas').textContent =`---    ${contador}---    `;
}

// Función para reestablecer el contador
function reestablecerContador() {
    localStorage.setItem('contadorOne', -1);
    actualizarContador();
}

// Inicializar el contador de visitas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    
    // Agregar evento al botón de reestablecer
    document.getElementById("btnReestablecer").addEventListener('click', reestablecerContador);
});
