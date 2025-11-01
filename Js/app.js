function cargarInicio() {
    document.getElementById("contenidoPrincipal").innerHTML = 
        "<h1>Bienvenido a Nuestra SPA</h1>" +
        "<p>Este es el contenido de la página de inicio.</p>" +
        "<p>Una Single Page Application (SPA) carga el contenido dinámicamente sin recargar toda la página.</p>";
}

function cargarAcerca() {
    document.getElementById("contenidoPrincipal").innerHTML = 
        "<h1>Acerca de Nosotros</h1>" +
        "<p>Aprende más sobre nuestra misión y valores.</p>" +
        "<p>Utilizamos HTML semántico para mejorar la accesibilidad y el SEO.</p>";
}

function cargarContacto() {
    document.getElementById("contenidoPrincipal").innerHTML = 
        "<h1>Contáctanos</h1>" +
        "<p>Detalles de contacto y formulario.</p>" +
        "<p>Email: contacto@ejemplo.com</p>" +
        "<p>Teléfono: +57 300 123 4567</p>";
}

// Cargar la página de inicio al abrir la aplicación
window.onload = function() {
    cargarInicio();
};