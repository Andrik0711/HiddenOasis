
// function validate() {
//     var userI = document.getElementById("user");
//     var passwordI = document.getElementById("password");

//     var user = userI.value;
//     var password = passwordI.value;

//     if (user == 'admin' && password == 'admin') {
//         window.location.href = "./Menu.html";
//     } else {
//         userI.style.borderColor = 'red';
//         passwordI.style.borderColor = 'red';
//         setTimeout(function () {
//             userI.style.borderColor = '#ced4da';
//             passwordI.style.borderColor = '#ced4da';
//             alert("#ERROR#\nDatos incorrectos");
//         }, 200);
//     }

// }

function verificacion() {
    var user = document.form.user.value;
    var pass = document.form.password.value;
    var usuario = "admin";
    var contrasena = "admin";

    // Condicion para ingresar ambas deben ser iguales
    if (user == usuario && pass == contrasena) {
        window.location.href = "/pages/forms/Menu.html";
    } else {
        document.getElementById('text').value = ("Usuario o contraseña no validos");
        return false;
    }
}
