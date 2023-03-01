"use strict";

function subir() {
    var formulario = "";
    var usuario = document.form1.usuario.value;
    var nombre = document.form1.nombre.value;
    var apellido = document.form1.apellido.value;
    var email = document.form1.email.value;
    var clave1 = document.form1.clave1.value;
    var clave2 = document.form1.clave2.value;
    var hobbies = "";
    var b = document.form1.hobby.length;
    var hobbies = [];

    if (document.getElementById("hobby1").checked != false) {
        hobbies.push(document.getElementById("hobby1").value);
    }

    if (document.getElementById("hobby2").checked != false) {
        hobbies.push(document.getElementById("hobby2").value);
    }
    if (document.getElementById("hobby3").checked != false) {
        hobbies.push(document.getElementById("hobby3").value);
    }
    if (document.getElementById("hobby4").checked != false) {
        hobbies.push(document.getElementById("hobby4").value);
    }
    if (document.getElementById("hobby5").checked != false) {
        hobbies.push(document.getElementById("hobby5").value);
    }
    if (document.getElementById("hobby6").checked != false) {
        hobbies.push(document.getElementById("hobby6").value);
    }

    if (usuario == "" || nombre == "" || apellido == "") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }
    if (hobbies.length == 0) {
        alert("Debes seleccionar al menos un hobby");
        return false;
    }


    if (clave1 != clave2 || clave1 == "") {
        alert("Las claves deben ser iguales y no pueden ser en un blanco!!!");
        return false;
    }
    if (email == "") {
        email = "Email invalido";
    }

    formulario = "Usuario: " + usuario + "\nNombre:" + nombre + " " + apellido + "\nEmail: " + email + "\nHobbies:";

    for (let i = 0; i < hobbies.length; i++) {
        formulario = formulario + "\n" + hobbies[i];
    }

    alert(formulario);

}

function reset() {

    document.getElementById("usuario").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("clave1").value = "";
    document.getElementById("clave2").value = "";
    document.getElementById("hobby1").checked = false;
    document.getElementById("hobby2").checked = false;
    document.getElementById("hobby3").checked = false;
    document.getElementById("hobby4").checked = false;
    document.getElementById("hobby5").checked = false;
    document.getElementById("hobby6").checked = false;

}