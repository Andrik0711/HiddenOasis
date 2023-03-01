
function subir() {
    var formulario = "";
    var usuario = document.form.username.value;
    var email = document.form.email.value;
    var password = document.form.password.value;
    var confirmpassword = document.form.confirmpassword.value;



    if (usuario == "") {
        document.getElementById('text').value = ("Usuario no valido");
        return false;
    }

    if (password != confirmpassword || password == "") {
        document.getElementById('text').value = ("Las contraseñas no coinciden");
        return false;
    }
    if (email == "") {
        document.getElementById('text').value = ("Email no valido");
        return false;
    }
    formulario = ' usuario: ' + usuario + ' email: ' + email + ' password: ' + password;
    document.getElementById('text').value = formulario;

}

