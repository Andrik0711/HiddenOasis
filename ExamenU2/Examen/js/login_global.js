// Creamos una función para validar los datos de acceso
function validarAcceso() {
    // Obtenemos los valores ingresados por el usuario
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Comparamos los valores con los datos de acceso correctos
    if (usuario === "jperez" && contrasena === "mipssw") {
        // Si los datos son correctos, redireccionamos a la página de inicio del cliente
        window.location.href = "/ExamenU2/Examen/Examen/menu.html";
    }
    if (usuario === "vendedor" && contrasena === "mipssw-vend") {
        // Si los datos son correctos, redireccionamos a la página de inicio del vendedor
        window.location.href = "/ExamenU2/Examen/Examen/menu.html";
    } else {
        // Si los datos son incorrectos, mostramos un modal de error
        $("#modalError").modal("show");
    }
}

// Asignamos la función de validación al evento submit del formulario
document
    .querySelector("form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        validarAcceso();
    });