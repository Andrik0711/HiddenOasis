"use strict";

function subir() {
    var formulario = "";
    var usuario = document.form.username.value;
    var email = document.form.email.value;
    var password = document.form.password.value;
    var confirmpassword = document.form.confirmpassword.value;



    if (usuario == "") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }

    if (password != confirmpassword || password == "") {
        alert("Las claves deben ser iguales y no pueden ser en un blanco!!!");
        return false;
    }
    if (email == "") {
        alert("Email invalido")
        return false;
    }

    alert("datos registrados", formulario);

}

function reset() {
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmpassword").value = "";
    document.getElementById("email").value = "";
}