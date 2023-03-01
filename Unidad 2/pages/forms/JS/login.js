"use strict";

function validate() {
    var userI = document.getElementById("user");
    var passwordI = document.getElementById("password");

    var user = userI.value;
    var password = passwordI.value;

    if (user == 'admin' && password == 'admin') {
        window.location.href = "./Menu.html";
    } else {
        userI.style.borderColor = 'red';
        passwordI.style.borderColor = 'red';
        setTimeout(function () {
            userI.style.borderColor = '#ced4da';
            passwordI.style.borderColor = '#ced4da';
            alert("#ERROR#\nDatos incorrectos");
        }, 200);
    }

}