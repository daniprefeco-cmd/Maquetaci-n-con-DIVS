document.getElementById('formularioLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita envío automático

    // Obtener valores
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Validación básica
    if (usuario === 'Daniela' && contrasena === '16078') {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        
        // Redirige a tu página principal
        window.location.href = "home.html";
    } else {
        alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
    }
});