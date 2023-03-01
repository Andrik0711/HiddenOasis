"use strict";

function subir() {
    var formulario = "";
    var code = document.form.code.value;
    var name = document.form.name.value;
    var category = document.form.category.value;
    var pricesale = document.form.pricesale.num;
    var pricebuy = document.form.pricebuy.num;



    if (code == "") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }
    if (name == "") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }
    if (category == "") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }
    if (pricebuy == " ") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }
    if (pricesale == " ") {
        alert("Los campos con asteriso son obligatorios");
        return false;
    }

    alert("datos registrados", formulario);

}

function reset() {
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("pricebuy").value = "";
    document.getElementById("pricesale").value = "";
}
