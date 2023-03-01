"use strict";

function subir() {
    var formulario = "";
    var key = document.form.key.value;
    var name = document.form.name.value;



    if (key == "") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }
    if (name == "") {
        alert("Nombre no valido")
        return false;
    }
    alert("datos registrados", formulario);

}

function reset() {
    document.getElementById("key").value = "";
    document.getElementById("name").value = "";

}