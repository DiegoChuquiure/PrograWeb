// 1. Seleccionamos el botón y el div de error por sus IDs
const botonLogin = document.getElementById('boton');
const mensajeError = document.getElementById('loginErrorMessage');

// 2. Escuchamos el evento 'click' en el botón
botonLogin.addEventListener('click', function(event) {
// Opcional: Si el botón está dentro de un <form>, evita que la página se recargue
event.preventDefault(); 

// 3. Mostramos el div cambiando su propiedad de estilo CSS
mensajeError.style.display = 'block';
});


const inputUsuario = document.getElementById('username');
const inputPassword = document.getElementById('pass');

// Esta variable nos ayuda a saber si el usuario ya empezó a interactuar
let usuarioYaInteractuo = false;

function evaluarEstadoBoton() {
  // Marcamos que el usuario ya tocó los inputs, por lo tanto el comportamiento se activa
  usuarioYaInteractuo = true;

  const usuarioTieneTexto = inputUsuario.value.trim() !== "";
  const passwordTieneTexto = inputPassword.value.trim() !== "";

  // Si ambos campos tienen texto, el botón se queda/vuelve NORMAL
  if (usuarioTieneTexto && passwordTieneTexto) {
    botonLogin.classList.remove('boton-desactivado');
    
  } else {
    // Si falta alguno (porque se borró o porque solo se escribió en uno), se vuelve OPACO
    botonLogin.classList.add('boton-desactivado');
  }
}

// Escuchamos la escritura en tiempo real en ambos inputs
inputUsuario.addEventListener('input', evaluarEstadoBoton);
inputPassword.addEventListener('input', evaluarEstadoBoton);


// Función que ejecuta la acción de inicio de sesión
function ejecutarLogin() {
  // Comprobamos si ambos inputs tienen texto (quitando espacios en blanco con .trim())
  if (inputUsuario.value.trim() !== "" && inputPassword.value.trim() !== "") {
    
    // OPCIÓN A: Si el botón ya tiene un evento programado, simulamos su clic:
    botonLogin.click();
    window.location.reload();
    
    // OPCIÓN B: Si quieres que muestre el error directamente aquí:
    // mensajeError.style.display = 'block';
    
  } else {
    // Opcional: Si presionan Enter con campos vacíos, puedes alertar al usuario o mostrar el error
    mensajeError.style.display = 'block';
  }
}

// 2. Escuchamos cuando el usuario presiona una tecla en el input de Usuario
inputUsuario.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evita que el formulario haga cosas raras o se recargue
    ejecutarLogin();
  }
});

// 3. Escuchamos cuando el usuario presiona una tecla en el input de Contraseña
inputPassword.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    ejecutarLogin();
  }
});
