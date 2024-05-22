// Obtener referencias a los elementos
const contador = document.getElementById("contador");
const btnActualizar = document.getElementById("btnActualizar");
 
// Variable para almacenar el valor del contador
let count = 0;
 
// Función para incrementar el contador
function incrementarContador() {
    count++;
    contador.textContent = count;
}
 
// Evento de click para el botón "Actualizar"
btnActualizar.addEventListener("click", incrementarContador);
