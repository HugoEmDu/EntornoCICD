function saludar() {
    return "Hola Mundo UTN 6.0";
}

// Esta es la función que hace la "integración"
function inyectarSaludo() {
    const titulo = document.getElementById('contenido');
    if (titulo) {
        titulo.textContent = saludar();
    }
}

// Exportamos la función para que el archivo de pruebas la pueda leer
if (typeof module !== 'undefined') {
    module.exports = { saludar, inyectarSaludo };
}