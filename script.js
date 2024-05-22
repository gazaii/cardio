// Obtener referencias a los elementos
const contador = document.getElementById("contador");
const btnActualizar = document.getElementById("btnActualizar");

// Cargar el valor del contador almacenado en localStorage
let count = localStorage.getItem("contador") || 0;

// Función para incrementar el contador
function incrementarContador() {
  count++;
  contador.textContent = count;

  // Actualizar el valor almacenado en localStorage
  localStorage.setItem("contador", count);
}

// Evento de click para el botón "Actualizar"
btnActualizar.addEventListener("click", incrementarContador);
